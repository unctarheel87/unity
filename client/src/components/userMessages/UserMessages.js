import React, { Component } from "react";
import { Input } from 'react-materialize';
import API from '../../utils/API';

export default class Messages extends Component {
	state= {
		message: ''
	}
	handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
	};
	handleSubmit = event => {
		event.preventDefault();
		API.createMsg(this.state.message, this.props.user._id);	
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
						<Input
							label="your message"
							name="message"
							type="textarea"
							value={this.state.message}
							onChange={this.handleChange('message')}
						/>
					<button type="submit" className="formSubmit waves-effect waves-light btn">Submit</button>
				</form>
			</div>
		)
	}
}