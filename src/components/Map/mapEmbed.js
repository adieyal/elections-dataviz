import React, { Component } from "react";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.min.css";
import styles from "./mapEmbed.css";
import config from "../../config";
import events from "../../events";

function className(originClassName) {
    return bootstrapStyles[originClassName] || styles[originClassName] || originClassName;
}

class MapEmbed extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            elementId: "root",
            disableNavigation: false, //checkbox
            regionType: "province",
            provinceName: "Western Cape",
            muniName: "",
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    onRegionTypeChange(e) {
        var newState = {regionType: e.target.value};
        this.setState(newState);
    }

    onPreview(e) {
        var event = new CustomEvent(events.MAP_PREVIEW, { detail: this.state });
        document.dispatchEvent(event);
    }
      
    render () {
        var DOMAIN = config.DOMAIN;
        var {
            elementId,            
            disableNavigation,
            regionType,
            provinceName,
            muniName,
        } = this.state;
        return (
          <div>
            <h3> Map Embed Script Generation </h3>
            <div className={className("form-group")}>
                <label>Element ID </label>
                <input 
                    type="text" 
                    className={className("form-control")} 
                    placeholder="chart-container"
                    onChange={e => this.setState({elementId: e.target.value})}
                    />
            </div>
            <div className={className("form-group")}>
                  <label>Region Type </label>
                  <select className={className("form-control")} 
                     value={regionType}
                     onChange={this.onRegionTypeChange.bind(this)}>
                        <option value="national">national</option>
                        <option value="province">province</option>
                        <option value="municipality">municipality</option>
                  </select>
              </div>
              {
                  (regionType != "national") && 
                    <div className={className("form-group")}>
                        <label>Province Name</label>
                        <input 
                            type="text" 
                            className={className("form-control")} 
                            placeholder="Western Cape"
                            value={provinceName}
                            onChange={e => this.setState({provinceName: e.target.value})} 
                            />
                    </div>
              }
              {
                  (regionType == "municipality") &&
                    <div className={className("form-group")}>
                        <label>Municipality Name</label>
                        <input 
                            type="text" 
                            className={className("form-control")} 
                            placeholder="City of Cape Town"
                            value={muniName}
                            onChange={e => this.setState({muniName: e.target.value})} 
                            />
                    </div>
              }

              <div className={className("form-check")}>
                
                <label className={className("form-check-label")}>
                    <input 
                        type="checkbox" 
                        className={className("form-check-input")} 
                        value={disableNavigation}
                        onChange={e => this.setState({disableNavigation: e.target.checked})} 
                        />
                    &nbsp;&nbsp;Disable Navigation
                </label>
              </div>
              <div className={className("form-group")}>
                <button type="button" onClick={this.onPreview.bind(this)} className={className("btn") + " " + className("btn-primary") }>Preview</button>
              </div>
            <div className={className("form-group")}>
                <label>Embed Code</label>
                <div className={className("embedcode")}>
                    <span>{`<script src="${DOMAIN}/embed/embed.js"></script>
                    <script>
                        showMap(document.getElementById("${elementId}"),{
                            disableNavigation: ${disableNavigation},
                            regionType: "${regionType}",
                            provinceName: "${provinceName}",
                            muniName: "${muniName}",
                        });</script>`.replace(/(\r\n|\n|\r)/gm, "")}
                    </span>
                </div>
            </div>
          </div>
        )
    }
}
export default MapEmbed;

