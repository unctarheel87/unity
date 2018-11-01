import React from 'react';
import { Col, Card, Row } from 'react-materialize'
import "./index.css"
import Tabs from "./Tabs"

export default class UserBio extends React.Component {

  render() {
    return (
      <div>
        <Col m={6} s={12}>
          <Card>
            <Row>
              <Col>
                <img src="https://via.placeholder.com/200" alt="profilePicture"></img>
              </Col>
              <Col>
                <h5> Name: </h5>
                <h5> Location: </h5>
                <br></br>
                <h5> About Me:</h5>
              </Col>
            </Row>
          </Card>
          <Card>
            <Tabs />
          </Card>
        </Col>
      </div >
    )
  }
}