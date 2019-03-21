import * as d3 from "d3";

function calcPercent(a, b) {
  if (b == 0) {
    return 0;
  } else {
    return (a/b*100).toFixed(2);
  }
}

export function parseVotesData(data, props) {
    var results, firstEdge;
    var regionType = props.regionType;
    if (regionType == "national") {
      firstEdge = data["data"]["allBallots"].edges[0];
    } else if (regionType == "province") {
      firstEdge = data["data"]["allProvincialBallots"].edges[0];
    } else if (regionType == "municipality") {
      firstEdge= data["data"]["allMunicipalBallots"].edges[0];
    } else { //"municipality-vd"
      firstEdge = data["data"]["allVotingDistrictBallots"].edges[0];
    }
    if (!firstEdge){
      console.error("party data is empty!!");
      return null;
    }

    var nodeData = firstEdge["node"];
    var partyResults = nodeData["partyResults"] || nodeData["topResult"];
    results = partyResults["edges"];
    results = results.sort(function(a, b) {return b.node.percOfVotes - a.node.percOfVotes});

    results = results.slice(0, props.numParties);

    return results.map(function(node) {
        var el = node["node"];
        return {
            name: el["party"]["abbreviation"],
            validVotes: el["validVotes"],
            percOfVotes: el["percOfVotes"],
            partyInfo: el["party"]
        }
    });
}

export function parseVotesComparisonData(data, props) {
  var results, edges;
  var regionType = props.regionType;
  if (regionType == "national") {
    edges = data["data"]["allBallots"].edges;
  } else if (regionType == "province") {
    edges = data["data"]["allProvincialBallots"].edges;
  } else if (regionType == "municipality") {
    edges= data["data"]["allMunicipalBallots"].edges;
  } else { //"municipality-vd"
    edges = data["data"]["allVotingDistrictBallots"].edges;
  }

  var partyfilter_edges = edges.map(edge => {
    var nodeData = edge["node"];
    var partyResults = nodeData["partyResults"] || nodeData["topResult"];
    results = partyResults["edges"].filter(a => a.node["party"]["abbreviation"] == props.partyAbbr);
    var result = results[0];
    if (result) {
      var el = result["node"];
      return {
          name: nodeData["event"]["description"],
          percOfVotes: el["percOfVotes"],
          partyInfo: el["party"]
      }
    }
    return {
      name: nodeData["event"]["description"],
      percOfVotes: 0,
      partyInfo: null
    }
  });
  return partyfilter_edges.filter(edge => props.eventDescriptions.indexOf(edge.name) != -1 && edge.partyInfo != null)
}

export function parseVotesComparisonDataMultipleParties(data, props) {
  return props.partyAbbrs.map(partyAbbr => {
    var newProps = {...props};
    newProps.partyAbbr = partyAbbr;
    return {
      partyAbbr,
      data: parseVotesComparisonData(data, newProps)
    }
  })
}

export function parseProgressVotesCount(data, props) {
  var firstEdge;
  var regionType = props.regionType;
  if (regionType == "national") {
    firstEdge = data["data"]["allBallots"].edges[0];
  } else if (regionType == "province") {
    firstEdge = data["data"]["allProvincialBallots"].edges[0];
  } else if (regionType == "municipality") {
    firstEdge= data["data"]["allMunicipalBallots"].edges[0];
  } else { //"municipality-vd"
    firstEdge = data["data"]["allVotingDistrictBallots"].edges[0];
  }
  if (!firstEdge){
    console.error("progress votes count data is empty!!");
    return null;
  }

  var nodeData = firstEdge["node"];

  return [
    {
      name: "Completed",
      percent: calcPercent(nodeData["vdWithResultsCaptured"], nodeData["vdCount"]),
      totalCount: nodeData["vdCount"],
      count: nodeData["vdWithResultsCaptured"]
    }, {
      name: "Not Completed",
      percent: 100 - calcPercent(nodeData["vdWithResultsCaptured"], nodeData["vdCount"]),
      totalCount: nodeData["vdCount"],
      count: nodeData["vdCount"] - nodeData["vdWithResultsCaptured"]
    }
  ]
}

// export function parseMainPartyData(data, props) {
//     if (!data)  return null;
//     var locationToMainParty = {};
//     var edges;
//     var regionType = props.regionType;
//     var sort_results = function(party_results) {
//         party_results["edges"] = party_results["edges"].sort(function(a, b) {
//             return b.node.percOfVotes - a.node.percOfVotes;
//         })
//         return party_results;
//     }
//     if (regionType === "national") {
//         edges = data["data"]["allProvincialBallots"].edges;
//         edges.forEach(function(edge) {
//             var node = edge.node;
//             var provinceName = node["location"]["name"];
//             var partyResults = sort_results(node["partyResults"]);
//             var partyName = partyResults["edges"][0]["node"]["party"]["name"];
//             locationToMainParty[provinceName] = partyName;
//         })
//     } else if (regionType === "province") {
//         edges = data["data"]["allMunicipalBallots"].edges;
//         edges.forEach(function(edge) {
//             var node = edge.node;
//             var muniCode = node["location"]["code"];
//             var partyResults = sort_results(node["partyResults"]);

//             var partyName = partyResults["edges"][0]["node"]["party"]["name"];
//             locationToMainParty[muniCode] = partyName;
//         })
//     } else {// "municipality"
//         edges = data["data"]["allVotingDistrictBallots"].edges;
//         edges.forEach(function(edge) {
//             var node = edge.node;
//             var iecId = node["location"]["iecId"];
//             var partyResults = sort_results(node["partyResults"]);

//             var partyName = partyResults["edges"][0]["node"]["party"]["name"];
//             locationToMainParty[iecId] = partyName;
//         })
//     }
//     return locationToMainParty;
// }



export function parseMainPartyData(data, props) {
  if (!data)  return null;
  var locationToMainParty = {};
  var edges;
  var regionType = props.regionType;
  if (regionType === "national") {
      edges = data["data"]["topPartiesByProvince"].edges;
      edges.forEach(function(edge) {
          var node = edge.node;
          var provinceName = node["location"]["name"];
          var partyName = node["topParty"]["party"]["name"];
          locationToMainParty[provinceName] = partyName;
      })
  } else if (regionType === "province") {
      edges = data["data"]["topPartiesByMunicipality"].edges;
      edges.forEach(function(edge) {
          var node = edge.node;
          var muniCode = node["location"]["code"];
          var partyName = node["topParty"]["party"]["name"];
          locationToMainParty[muniCode] = partyName;
      })
  } else {// "municipality"
      edges = data["data"]["topPartiesByVotingDistrict"].edges;
      edges.forEach(function(edge) {
          var node = edge.node;
          var iecId = node["location"]["iecId"];
          var partyName = node["topParty"]["party"]["name"];
          locationToMainParty[iecId] = partyName;
      })
  }
  return locationToMainParty;
}

export function parseSeatsData(data, props) {
  if (!data)  return null;
  var edges = data["data"]["allSeatCalculations"].edges;
  var regionType = props.regionType;
  var results = edges.map(edge => {
    var node = edge.node;
    var seats = 0;
    if (regionType === "national") {
      seats = node["nationalPr"] + node["regional"];
    } else {//"province"
      seats = node["regional"];
    }
    return {
      seats,
      name: node["party"]["abbreviation"],
      partyInfo: node["party"]
    }
  })
  
  // results.sort(function(a,b) {
  //   return b["seats"] - a["seats"];
  // })
  return results.slice(0, props.numParties);
}

export function parseSeatsComparisonData(data, props) {
  if (!data)  return null;
  var edges = data["data"]["allSeatCalculations"].edges;
  var regionType = props.regionType;

  var results = edges.map(edge => {
    var node = edge.node;
    var seats = 0;
    if (regionType === "national") {
      seats = node["nationalPr"] + node["regional"];
    } else {//"province"
      seats = node["regional"];
    }
    return {
      seats,
      name: node["party"]["event"]["description"],
      partyInfo: node["party"]
    }
  }).filter(result => result.partyInfo["abbreviation"] == props.partyAbbr)
  .filter(result => props.eventDescriptions.indexOf(result.name) != -1)
  
  // results.sort(function(a,b) {
  //   return b["seats"] - a["seats"];
  // })
  return results;
}

export function parseTurnoutData(data, props) {
  if (!data)  return null;
  var locationToTurnout = {};
  var edges;
  var regionType = props.regionType;
  if (regionType === "national") {
      edges = data["data"]["allProvincialBallots"].edges;
      edges.forEach(function(edge) {
          var node = edge.node;
          var provinceName = node["location"]["name"];
          var percVoterTurnout = node["percVoterTurnout"]; 
          locationToTurnout[provinceName] = percVoterTurnout;
      })
  } else if (regionType === "province") {
      edges = data["data"]["allMunicipalBallots"].edges;
      edges.forEach(function(edge) {
          var node = edge.node;
          var muniCode = node["location"]["code"];
          var percVoterTurnout = node["percVoterTurnout"]; 
          locationToTurnout[muniCode] = percVoterTurnout;
      })
  } else {// "municipality"
      edges = data["data"]["allVotingDistrictBallots"].edges;
      edges.forEach(function(edge) {
          var node = edge.node;
          var iecId = node["location"]["iecId"];
          var percVoterTurnout = node["percVoterTurnout"]; 
          locationToTurnout[iecId] = percVoterTurnout;
      })
  }
  return locationToTurnout;
}

export function parseTurnoutDataForAllEvents(data, props) {
  if (!data)  return null;
  var edges;
  var regionType = props.regionType;
  if (regionType == "national") {
    edges = data["data"]["allBallots"].edges;
  } else if (regionType == "province") {
    edges = data["data"]["allProvincialBallots"].edges;
  } else if (regionType == "municipality") {
    edges = data["data"]["allMunicipalBallots"].edges;
  } else if (regionType == "municipality-vd") {
    edges = data["data"]["allVotingDistrictBallots"].edges;
  }
  
  return edges.map(function(edge) {
    var node = edge.node;
    var event = node["event"]["description"];
    var percVoterTurnout = node["percVoterTurnout"]; 
    return {
      name: event,
      percVoterTurnout
    }
  }).filter(edge => edge.name.toLowerCase().indexOf(props.eventType) != -1)
}

export function parseSpoiltVotesData(data, props) {
  var firstEdge;
  var regionType = props.regionType;
  if (regionType == "national") {
    firstEdge = data["data"]["allBallots"].edges[0];
  } else if (regionType == "province") {
    firstEdge = data["data"]["allProvincialBallots"].edges[0];
  } else if (regionType == "municipality") {
    firstEdge= data["data"]["allMunicipalBallots"].edges[0];
  } else { //"municipality-vd"
    firstEdge = data["data"]["allVotingDistrictBallots"].edges[0];
  }
  if (!firstEdge){
    console.error("spoilt data is empty!!");
    return null;
  }

  var nodeData = firstEdge["node"];

  return [
    {
      name: "Valid",
      percent: calcPercent(nodeData["totalValidVotes"], nodeData["totalVotesCast"])
    }, {
      name: "Spoilt",
      percent: calcPercent(nodeData["spoiltVotes"], nodeData["totalVotesCast"])
    }
  ]
}

export function getRegionName(state) {
  function beautifiedMuniName(muniName) {
    if (muniName.indexOf(" - ") != -1) {
        muniName = muniName.split(" - ")[1];
    }
    if (muniName.indexOf("[") != -1) {
        muniName = muniName.split("[")[0];
    }
    return muniName;
  }
  if (state.regionType == "national") {
    return "South Africa";
  }
  if (state.regionType == "province") {
    return state.provinceName;
  }
  if (state.regionType == "municipality") {
    return beautifiedMuniName(state.muniName);
  }
  if (state.regionType == "municipality-vd") {
    return beautifiedMuniName(state.muniName) + "-" + state.iecId;
  }
}

export function getSubRegionName(properties, state) {
  if (state.regionType === "national") {
      return properties.SPROVINCE;
  } else if (state.regionType === "province") {
      return properties.smunicipal && properties.smunicipal.split(" - ")[1].split("[")[0]; 
  } else {//municipality
      return properties.SMUNICIPAL && properties.SMUNICIPAL.split(" - ")[1].split("[")[0]; 
  }
}

export function getNationOrProvinceName(state) {
  if (state.regionType == "national") {
    return "South Africa";
  }
  return state.provinceName;
}

export function createTooltip(className) {
  if (document.getElementsByClassName(className("tooltip"))[0]) {
    return d3.select(`.${className("tooltip")}`);
  } else {
    return d3.select("body").append("div")	
      .attr("class", className("tooltip"))				
      .style("opacity", 0);
  }
}

export function getMunicipalityCode(properties) {
  return properties.code || (properties.smunicipal && properties.smunicipal.split(" - ")[0].replace(/\s/g, ""));
}

export function fixMapLabelIntersect() {
  var labelElements = document.getElementsByClassName("place-label");
  var regions = {};
  var overlapCnt = {};
  var i;

  for (i = 0; i < labelElements.length; i ++) {
      regions[i] = labelElements[i].getBoundingClientRect();
  }

  for (i = 0; i < labelElements.length; i ++) {
      for (var j = 0; j < i; j ++) {
          var rect1 = regions[i];
          var rect2 = regions[j];
          var overlap = !(rect1.right < rect2.left || 
              rect1.left > rect2.right || 
              rect1.bottom < rect2.top || 
              rect1.top > rect2.bottom);
          if (overlap) {
              overlapCnt[i] = overlapCnt[i]? (overlapCnt[i] + 1): 1;
          }
      }
      if (overlapCnt[i] > 2) {
          labelElements[i].setAttribute("opacity", 0)
      } else if (overlapCnt[i] > 0){
          labelElements[i].innerHTML = labelElements[i].innerHTML.slice(0, 3) + "...";
      } else {

      }
  }
}

export function triggerCustomEvent(eventName, eventParam) {
  var event = new CustomEvent(eventName, { detail: eventParam });
  document.dispatchEvent(event);
}