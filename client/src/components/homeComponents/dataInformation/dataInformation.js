import React from "react"
import "./index.css"
import Graph from "./graphExample.PNG"
import {Col, Row} from "react-materialize"
// import styled from "styled-components"

export default () => (
    <div className="infoContainer">

        <h1 className="infoContainerHeader"> Using Unity, we bring you together with:</h1>
        <div className="iconArea container">
            <Row>
                <Col s={4}>
                <i className="large material-icons">access_time</i>
            <p className="iconText"> Real-time Data </p>
                </Col>
                <Col s={4}>
                <i className="large material-icons">person_pin</i>
            <p className="iconText"> Knowledgeable Experts</p>

                </Col>
                <Col s={4}>
                <i className="large material-icons">find_in_page</i>
            <p className="iconText"> Personal Watchlist </p>
                </Col>
            </Row>
        </div>
        <div className="dataInformation">
            <div className="graphDescription">
                <p className="graphText">Use Unity's stock finder.  Our real-time stock tool will give you current stock prices and trends, and allow you to retrieve that company's stock performance for the last 20 years. Found a stock you want to Watch?  We've got you covered.  Just save that company to your own watch-list. Utilizing D3 in combination with React-Charts allows us to create visualizations to display information about the stock you choose.</p>
            </div>
            <img src={Graph} alt="graph" className="graphImage z-depth-3"></img>
        </div>
    </div>
)