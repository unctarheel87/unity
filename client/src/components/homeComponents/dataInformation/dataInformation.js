import React from "react"
import "./index.css"
import Graph from "./graphExample2.PNG"

export default () => (
    <div className="infoContainer">
        <div className="dataInformation">
            <h4> Real-time data at your fingertips.</h4>
            <img src={Graph} alt="graph" className="graphImage"></img>
        </div>
    </div>
)