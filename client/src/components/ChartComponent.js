import React from 'react';
import { TypeChooser } from "react-stockcharts/lib/helper";
import Chart from '../components/sChart';

export default class ChartComponent extends React.Component {
  render() {
    if (this.props.stockData.data == null) {
      return <div>Loading...</div>
    }
    return (
      <TypeChooser>
        {type => <Chart type={type} data={this.props.stockData.data} />}
      </TypeChooser>
    )
  }
}