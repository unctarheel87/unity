import React, { Component } from "react";
import { Input, Col, Card } from 'react-materialize';
import API from '../../utils/API';
import './userMessages.css';

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
			<div class="user-messages-container">
				<div className="messages-display">
					<h4>Messages</h4>
					{this.props.user.messages.slice(0).reverse().map(message => 
						<Col l={4} m={6} s={12}>
    					<Card className='#ffffff white' textClassName='black-text' title={message.message}>
      					<p>{message.author}</p>
      					<p>{message.created}</p>
    					</Card>
						</Col>
					)}
				</div>
				<div className="message-form">
					<h4>Compose Message</h4>
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
			</div>
		)
	}
}