import React, { Component } from 'react';
import './App.css';
import Unitybkgd from "./components/Unitybkgd"
import Footer from "./components/footer"
import Jumbotron from "./components/jumbotron"
import Nav from "./components/navbar"
import SearchForm from "./components/searchForm"
import StockItem from "./components/stockItem"
import Chart from './components/sChart';
import { getData } from "./utils/API.js"

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

class App extends Component {
  state = {
    username: "john",
    password: "super"
  }

  render() {
    return (
      <div>
      
        <Nav />
        <Unitybkgd />
        <Jumbotron>
        </Jumbotron>

        <ChartComponent />
        <SearchForm />

        {/* <StockItem /> */}
        
        <br></br>
        <Footer />
        
      </div>
    )
  }
};

export default App;
