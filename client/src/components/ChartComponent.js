import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';
import { Row, Col, ProgressBar } from 'react-materialize';
import Chart from './sChart';

export default class ChartComponent extends React.Component {
  render() {
    if (this.props.stockData.data === "loading") {
      return (
      <Row>
        <Col s={12}>
          <ProgressBar />
        </Col>
      </Row>
      )
    }
    if (this.props.stockData.data === null) {
      return <div><br></br></div>
    }
    return (
      <TypeChooser>
        {type => <Chart type={type} data={this.props.stockData.data} />}
      </TypeChooser>
    )
  }
}