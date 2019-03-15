(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/BarChart/barchart.css":function(e,t,n){e.exports={"chart-label":"barchart_chart-label__3tvGL","chart-title":"barchart_chart-title__t2Jfy","chart-body":"barchart_chart-body__23hsu","percentage-label":"barchart_percentage-label__1U_g3",chart:"barchart_chart__375WS",large:"barchart_large__16vIM","y-axis-label":"barchart_y-axis-label__nd438","y-label":"barchart_y-label__17YRS","annotation-line":"barchart_annotation-line__1cx5A",tooltip:"barchart_tooltip__GsDXT",grid:"barchart_grid__3zGMX"}},"./src/components/BarChart/barchart.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/d3/index.js"),i=n("./src/components/BarChart/barchart.css"),s=n.n(i),c=n("./src/components/BarChart/d3barchart.js"),l=n("./node_modules/save-svg-as-png/lib/saveSvgAsPng.js"),u=n.n(l),p=n("./src/events/index.js"),d=n("./src/api/index.js"),m=n("./src/utils/index.js");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e){return(y="function"===typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _,x;Object(d.f)();function N(e){return s.a[e]||e}var w=0,E="Race For Votes",P=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?g(e):t}(this,h(t).call(this,e));g(g(n));if(n.state={numParties:5,eventDescription:"2014 National Election",regionType:"national",provinceName:"",muniName:"",muniCode:"",iecId:""},e.numParties&&(n.state.numParties=e.numParties),e.regionType&&(n.state.regionType=e.regionType),e.provinceName&&(n.state.provinceName=e.provinceName),e.muniName&&(n.state.muniName=e.muniName),e.muniCode&&(n.state.muniCode=e.muniCode),e.iecId&&(n.state.iecId=e.iecId),e.width&&e.height)n.state.width=e.width,n.state.height=e.height;else{var a=n.getWidthHeightByScreenSize(),r=a.modifW,o=a.modifH;n.state.width=r,n.state.height=o}return n.exportAsPNG=n.exportAsPNG.bind(g(g(n))),n.exportAsPNGUri=n.exportAsPNGUri.bind(g(g(n))),n.handleRegionChange=n.handleRegionChange.bind(g(g(n))),n.handlePreviewEvent=n.handlePreviewEvent.bind(g(g(n))),n}var n,i,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.draw(this.getContainer(),this.state),w=setInterval(function(){e.draw(e.getContainer(),e.state)},3e4),document.addEventListener(p.a.EXPORT_PNG,this.exportAsPNG),document.addEventListener(p.a.REGION_CHANGE,this.handleRegionChange),document.addEventListener(p.a.CHART_PREVIEW,this.handlePreviewEvent)}},{key:"componentDidUpdate",value:function(){this.draw(this.getContainer(),this.state)}},{key:"componentWillUnmount",value:function(){_&&(_.destroy(),_=null),document.removeEventListener(p.a.EXPORT_PNG,this.exportAsPNG),document.removeEventListener(p.a.REGION_CHANGE,this.handleRegionChange),document.removeEventListener(p.a.CHART_PREVIEW,this.handlePreviewEvent),clearInterval(w)}},{key:"getWidthHeightByScreenSize",value:function(){var e=Math.min(810,document.body.clientWidth-350);return document.body.clientWidth<775&&(e=document.body.clientWidth-50),{modifW:e,modifH:e/3.5}}},{key:"exportAsPNG",value:function(e){u.a.saveSvgAsPng(this.refs.vizcontainer.childNodes[0],"race-for-votes-barchart(".concat(Object(m.e)(this.state),").png"))}},{key:"exportAsPNGUri",value:function(){var e=this;return new Promise(function(t,n){u.a.svgAsPngUri(e.refs.vizcontainer.childNodes[0],{},function(e){t(e.split(",")[1])})})}},{key:"handleRegionChange",value:function(e){var t=e.detail;this.setState(t)}},{key:"handlePreviewEvent",value:function(e){var t=e.detail;_&&_.destroy(),_=new c.a(this.getContainer(),this.state.width,this.state.height,N),this.setState(t)}},{key:"getContainer",value:function(){return o.n(this.refs.vizcontainer)}},{key:"render",value:function(){return r.a.createElement("div",{className:N("barchart")},r.a.createElement("div",{className:N("chart-title")},E," (",Object(m.e)(this.state),"): "),r.a.createElement("div",{ref:"vizcontainer",className:N("chart-body")}))}},{key:"draw",value:function(e,t){var n=this,a=[Object(d.m)(t)];if(!x){var r=Object(d.d)();a.push(r)}Promise.all(a).then(function(a){var r=a[0];x=x||a[1],n.drawGraph(e,t,r,x)}).catch(function(e){return console.error(e)})}},{key:"drawGraph",value:function(e,t,n,a){var r=Object(m.o)(n,t),o=parseInt(t.width),i=parseInt(t.height);_||(_=new c.a(e,o,i,N)),_.draw(r,a)}}])&&v(n.prototype,i),s&&v(n,s),t}();t.a=P,P.__docgenInfo={description:"",methods:[{name:"getWidthHeightByScreenSize",docblock:null,modifiers:[],params:[],returns:null},{name:"exportAsPNG",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"exportAsPNGUri",docblock:null,modifiers:[],params:[],returns:null},{name:"handleRegionChange",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"handlePreviewEvent",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"getContainer",docblock:null,modifiers:[],params:[],returns:null},{name:"draw",docblock:null,modifiers:[],params:[{name:"container",type:null},{name:"props",type:null}],returns:null},{name:"drawGraph",docblock:null,modifiers:[],params:[{name:"container",type:null},{name:"props",type:null},{name:"data",type:null},{name:"partyColorsData",type:null}],returns:null}],displayName:"BarChart"}},"./src/components/BarChart/d3barchart.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("./node_modules/d3/index.js"),r=n("./src/utils/index.js");n("./node_modules/os-browserify/browser.js");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function s(e,t,n,o,s){s||(s={}),s.chartType||(s.chartType="Race For Votes"),s.yAxisLabel||(s.yAxisLabel="PERCENTAGE VOTES"),s.yValue||(s.yValue=function(e){return e.percOfVotes}),s.yValueFormat||(s.yValueFormat=function(e){return e+"%"}),e.selectAll("svg").remove();var c=["blue","yellow","red"],l=e.append("svg").attr("preserveAspectRatio","xMinYMin meet").style("background-color","#ffffff").attr("viewBox","0 0 770 220").classed("svg-content",!0),u=Object(r.a)(o),p=a.l().rangeRound([70,700]),d=a.m().rangeRound([200,20]);l.append("g").attr("transform","translate(20,110)").append("text").attr("class",o("percentage-label")).attr("transform","rotate(-90)").text(s.yAxisLabel).attr("text-anchor","middle"),l.append("g").attr("class","x axis").attr("transform","translate(0,200)"),l.append("g").attr("class","y axis").attr("transform","translate(70, 0)");var m=l.append("g").attr("class",o("bar-container")),f=l.append("g").attr("class",o("bartext-container")),y=l.append("g").attr("transform","translate(350,100)").append("text").attr("text-anchor","middle");this.draw=function(e,t){if(e){y.text("");var n={};if(s.noXaxisByParty);else{var r=t;r&&r.data.allParties.edges&&r.data.allParties.edges.forEach(function(e){n[e.node.name]=e.node.colour})}p.domain(e.map(function(e){return e.name}));var v=[0,100];s.dynamicYAxisFromValues&&(v[1]=a.j(e,function(e){return s.yValue(e)})),d.domain(v),l.select(".x.axis").transition().duration(300).call(a.b(p)),l.select(".y.axis").transition().duration(300).call(a.c(d).ticks(6).tickFormat(function(e){return s.yValueFormat(e)}));var h=m.selectAll(".".concat(o("bar"))).data(e);h.exit().transition().duration(300).attr("y",function(e){return d(0)}).attr("height",0).style("fill-opacity",1e-6).remove(),h.enter().append("rect").attr("class",function(e){return o("bar")+" bar_"+e.name}).attr("x",function(e){return p(e.name)+p.bandwidth()/20}).attr("width",9*p.bandwidth()/10).attr("fill",function(e,t){return g(e,t)}).on("mousemove",function(e,t){a.n(this).attr("opacity",.8),u.transition().duration(200).style("opacity",.9),u.html(function(e,t){return s.noXaxisByParty?e.name+" : "+s.yValueFormat(s.yValue(e)):e.partyInfo.name.split("/")[0].toLowerCase().replace(/\b\w/g,function(e){return e.toUpperCase()})+" : "+s.yValueFormat(s.yValue(e))}(e)).style("left",a.d.pageX+"px").style("top",a.d.pageY-28+"px")}).on("mouseout",function(e){a.n(this).attr("opacity",1),u.transition().duration(200).style("opacity",0)}).attr("y",function(e){return d(0)}).attr("height",0),m.selectAll(".".concat(o("bar"))).data(e).attr("fill",function(e,t){return g(e,t)}).transition().duration(300).attr("y",function(e){return d(Number(s.yValue(e)))}).attr("height",function(e){return 200-d(Number(s.yValue(e)))});var b=f.selectAll(".".concat(o("bartext"))).data(e);b.exit().transition().duration(300).attr("y",function(e){return d(0)-5}).style("fill-opacity",1e-6).remove(),b.enter().append("text").attr("class",o("bartext")).attr("x",function(e){return p(e.name)+p.bandwidth()/2}).attr("text-anchor","middle").attr("font-size","12px").attr("y",function(e){return d(0)-5}),f.selectAll(".".concat(o("bartext"))).data(e).text(function(e){return s.yValueFormat(s.yValue(e))}).transition().duration(300).attr("y",function(e){return d(Number(s.yValue(e)))-5})}else y.text("chart data is not available");function g(e,a){return s.noXaxisByParty?"object"==i(t)?t[e.name]:"function"==typeof t?t(e,a):t:function(e,t){return n[e.split("/")[0]]||c[t%c.length]}(e.partyInfo.name,a)}},this.destroy=function(){l.remove()}}},"./src/components/Map/map.css":function(e,t,n){e.exports={"map-title":"map_map-title__1EiC5","loading-spinner":"map_loading-spinner__2woTM",tooltip:"map_tooltip__2OtWf"}},"./src/components/Map/map.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/d3/index.js"),i=n("./node_modules/topojson-client/index.js"),s=(n("./node_modules/save-svg-as-png/lib/saveSvgAsPng.js"),n("./node_modules/canvg/dist/browser/canvg.min.js")),c=n.n(s),l=n("./src/config/index.js"),u=n("./node_modules/polylabel/index.js"),p=n.n(u),d=n("./src/components/Map/map.css"),m=n.n(d),f=n("./src/events/index.js"),y=n("./node_modules/react-loading/dist/react-loading.js"),v=n.n(y),h=n("./src/api/index.js"),b=n("./src/utils/index.js");function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return(_="function"===typeof Symbol&&"symbol"===g(Symbol.iterator)?function(e){return g(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":g(e)})(e)}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var P,j="#9c9c9c";function O(e){return m.a[e]||e}Object(h.f)();var C=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=N(t).call(this,e))||"object"!==_(r)&&"function"!==typeof r?E(a):r).state={disableNavigation:!1,eventDescription:"2014 National Election",regionType:"national",provinceName:"",muniName:"",muniCode:"",iecId:""},e.regionType&&(n.state.regionType=e.regionType),e.provinceName&&(n.state.provinceName=e.provinceName),e.muniName&&(n.state.muniName=e.muniName),e.muniCode&&(n.state.muniCode=e.muniCode),e.disableNavigation&&(n.state.disableNavigation=e.disableNavigation),n.exportAsPNGUri=n.exportAsPNGUri.bind(E(E(n))),n.exportAsPNG=n.exportAsPNG.bind(E(E(n))),n.handlePreviewEvent=n.handlePreviewEvent.bind(E(E(n))),n}var n,s,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,a["Component"]),n=t,(s=[{key:"draw",value:function(e,t){this.drawGraph(e,t)}},{key:"componentDidMount",value:function(){this.draw(this.getContainer(),this.state),document.addEventListener(f.a.EXPORT_PNG,this.exportAsPNG),document.addEventListener(f.a.MAP_PREVIEW,this.handlePreviewEvent)}},{key:"componentWillUnmount",value:function(){this.getContainer().selectAll("svg").remove(),document.removeEventListener(f.a.EXPORT_PNG,this.exportAsPNG),document.removeEventListener(f.a.MAP_PREVIEW,this.handlePreviewEvent)}},{key:"componentDidUpdate",value:function(){this.draw(this.getContainer(),this.state)}},{key:"exportAsPNGUri",value:function(){var e=this;return new Promise(function(t,n){var a=950,r=890,o=document.createElement("canvas");o.setAttribute("width",a),o.setAttribute("height",r),c()(o,e.refs.vizcontainer.innerHTML,{ignoreDimensions:!0,scaleWidth:a,scaleHeight:r}),t(o.toDataURL("image/png;base64").split(",")[1])})}},{key:"exportAsPNG",value:function(e){var t=950,n=890,a=document.createElement("canvas");a.setAttribute("width",t),a.setAttribute("height",n),c()(a,this.refs.vizcontainer.innerHTML,{ignoreDimensions:!0,scaleWidth:t,scaleHeight:n});var r,o=a,i="race-for-votes-map(".concat(Object(b.e)(this.state),").png"),s=document.createElement("a");s.download=i,s.href=o.toDataURL("image/png;base64"),document.createEvent?((r=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(r)):s.fireEvent&&s.fireEvent("onclick")}},{key:"handlePreviewEvent",value:function(e){var t=e.detail;this.setState(t)}},{key:"getContainer",value:function(){return o.n(this.refs.vizcontainer)}},{key:"getLoadingSpinner",value:function(){return o.n(this.refs.loading)}},{key:"render",value:function(){this.state.disableNavigation;return r.a.createElement("div",{className:O("map-widget")},r.a.createElement("div",{className:O("map-title")},Object(b.e)(this.state)),r.a.createElement("div",{ref:"vizcontainer",className:O("map")}),r.a.createElement("div",{className:O("loading-spinner"),ref:"loading"},r.a.createElement(v.a,{type:"spin",color:"#777",height:100,width:100})))}},{key:"drawGraph",value:function(e,t){var n=this,a="province_lo-res.geojson";var r=l.a.DOMAIN+"/mapdata/"+function(){switch(n.state.regionType){case"national":return a;case"province":return{Limpopo:"lim_lo-res.geojson",Mpumalanga:"mp_lo-res.geojson",Gauteng:"gt_lo-res.geojson","KwaZulu-Natal":"kzn_lo-res.geojson","North West":"nw_lo-res.geojson","Free State":"fs_lo-res.geojson","Eastern Cape":"ec_lo-res.geojson","Northern Cape":"nc_lo-res.geojson","Western Cape":"wc_lo-res.geojson"}[n.state.provinceName];case"municipality":return n.state.muniCode+".topojson";default:return null}}();n.getLoadingSpinner().style("display","block").transition().duration(200).style("opacity",1);var s=Object(b.a)(O),c=800;e.selectAll("svg").remove();var u=e.append("svg").attr("preserveAspectRatio","xMinYMin meet").style("background-color","#ffffff").attr("viewBox","0 0 950 "+(c+90)).classed("svg-content",!0),d=[o.i(r),Object(h.b)(t)];if(!P){var m=Object(h.d)();d.push(m)}Promise.all(d).then(function(e){var a=e[0],l=Object(b.g)(e[1],t);P=P||e[2];var d,m={},y={};function v(e){return e&&m[e.split("/")[0]]||j}function h(e,t){var a,r=n.state.regionType;if("national"===r){var o=e.properties.SPROVINCE;a=l[o]}else if("province"===r){var i=Object(b.c)(e.properties);a=l[i]}else{var s=e.properties.PKLVDNUMBE;a=l[s]}return a}if(P&&P.data.allParties.edges&&P.data.allParties.edges.forEach(function(e){m[e.node.name]=e.node.colour,y[e.node.name]=e.node.abbreviation}),-1!==r.indexOf(".topojson")){if(!a.objects[n.state.muniCode])return;a=i.a(a,a.objects[n.state.muniCode])}d=a.features;var g=o.f().fitSize([900,c],a),_=o.g().projection(g);u.selectAll(".".concat(O("region"))).data(d).enter().append("path").attr("class",O("region")).attr("stroke","#eeeeee").attr("fill",function(e,t){return v(h(e))}).attr("id",function(e,t){return"region-".concat(t)}).attr("d",_);var x=[],N=[];d.forEach(function(e,t){var n=h(e);-1==x.indexOf(n)?(x.push(n),N.push(1)):N[x.indexOf(n)]++}),x.sort(function(e,t){return N[x.indexOf(t)]-N[x.indexOf(e)]});var w=u.selectAll(".".concat(O("legend"))).data(x).enter().append("g").attr("transform",function(e,t){return"translate("+function(e){return[e%5*150,c+10+40*parseInt(e/5)]}(t)+")"});(w.append("rect").attr("class",O("legend")).attr("width",20).attr("height",20).attr("x",0).attr("y",0).attr("fill",function(e,t){return v(e)}),w.append("text").attr("x",30).attr("y",16).text(function(e){return y[e]}),"municipality"!==n.state.regionType&&u.selectAll(".place-label").data(d).enter().append("text").attr("class","place-label").attr("font-size","12px").attr("transform",function(e){var t,n;return"Polygon"===e.geometry.type?(t=p()(e.geometry.coordinates),(n=g(t))[1]-=12,"translate("+n+")"):(t=p()(e.geometry.coordinates[0]),(n=g(t))[1]-=5,"translate("+n+")")}).attr("dy",".35em").style("text-anchor","middle").text(function(e){return Object(b.f)(e.properties,n.state)}),"municipality"!==n.state.regionType&&Object(b.b)(),u.selectAll(".eventLayer").data(d).enter().append("path").attr("d",_).attr("class","eventLayer").attr("id",function(e,t){return"eventLayer-".concat(t)}).attr("fill","transparent").on("mouseover",function(e,t){o.n("#region-".concat(t)).attr("stroke-width",3).style("fill-opacity",.8)}).on("mousemove",function(e,t){"municipality"!==n.state.regionType&&(s.transition().duration(200).style("opacity",1),s.html(Object(b.f)(e.properties,n.state)+" : "+h(e)).style("left",o.d.pageX+"px").style("top",o.d.pageY-28+"px"))}).on("mouseout",function(e,t){o.n("#region-".concat(t)).attr("stroke-width",1).style("fill-opacity",1),"municipality"!==n.state.regionType&&s.transition().duration(200).style("opacity",0)}).on("click",function(e,t){if(!n.state.disableNavigation){s.transition().duration(200).style("opacity",0);var a,r=n.state.regionType;if("national"===r)o={regionType:"province",provinceName:e.properties.SPROVINCE},Object(b.p)(f.a.REGION_CHANGE,o),n.setState(o);else if("province"===r)o={regionType:"municipality",provinceName:n.state.provinceName,muniName:e.properties.smunicipal,muniCode:Object(b.c)(e.properties)},Object(b.p)(f.a.REGION_CHANGE,o),n.setState(o);else{var o={regionType:"municipality-vd",provinceName:n.state.provinceName,muniName:n.state.muniName,muniCode:n.state.muniCode,iecId:(a=e.properties,a.PKLVDNUMBE)};Object(b.p)(f.a.REGION_CHANGE,o)}}}),n.state.disableNavigation)||u.append("foreignObject").attr("x",800).attr("y",10).attr("width",100).attr("height",30).attr("class","map-controls").append("xhtml:div").append("button").attr("class","go-back").html("go back").on("click",function(){var e=n.state.regionType,t={regionType:n.state.regionType,provinceName:n.state.provinceName,muniName:n.state.muniName,muniImuniCodeD:n.state.muniCode,iecId:n.state.iecId};"province"===e?t.regionType="national":"municipality"===e&&(t.regionType="province"),Object(b.p)(f.a.REGION_CHANGE,t),n.setState(t)});n.getLoadingSpinner().style("display","none")})}}])&&x(n.prototype,s),u&&x(n,u),t}();t.a=C,C.__docgenInfo={description:"",methods:[{name:"draw",docblock:null,modifiers:[],params:[{name:"container",type:null},{name:"props",type:null}],returns:null},{name:"exportAsPNGUri",docblock:null,modifiers:[],params:[],returns:null},{name:"exportAsPNG",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"handlePreviewEvent",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"getContainer",docblock:null,modifiers:[],params:[],returns:null},{name:"getLoadingSpinner",docblock:null,modifiers:[],params:[],returns:null},{name:"drawGraph",docblock:null,modifiers:[],params:[{name:"container",type:null},{name:"props",type:null}],returns:null}],displayName:"Map"}},1:function(e,t){},2:function(e,t){}}]);
//# sourceMappingURL=src-components-barchart-with-nav-map-barchart-map~src-components-quick-results-widget-quick-results-~94fde5bf.6a1b0bd1c3f1f10bdabe.js.map