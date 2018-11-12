import React, { Component } from "react";
import { Input, Col, Card, Icon } from 'react-materialize';
import API from '../../utils/API';
import './userMessages.css';
import openSocket from 'socket.io-client';

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
		API.createMsg(this.state.message, this.props.user._id)
		.then(response => {
			window.Materialize.toast('Message Sent', 2000);
			emit('New message from your client: ' + this.props.user.username);
			this.setState({ message: '' });
		})
		.catch(err => console.log(err));
	}
	render() {
		//filter only messages sent by the advisor
		const filteredMessages = this.props.user.messages.filter(message => message.author !== this.props.user.username);
		return (
			<div class="user-messages-container">
				<div className="user-messages-display">
					<h4>Messages</h4>
					{filteredMessages.slice(0).reverse().map(message => 
						<Col l={4} m={6} s={12}>
    					<Card className="#ffffff white message-card" textClassName="black-text" title={message.message}>
      					<p>{message.author}</p>
      					<p>{message.created}</p>
    					</Card>
						</Col>
					)}
				</div>
				<div className="user-message-form">
					<h4>Compose Message</h4>
					<form onSubmit={this.handleSubmit}>
							<label> To: <span id="advisor-name">{this.props.user.messages[0].author}</span> </label>
							<Input
								label="your message"
								name="message"
								type="textarea"
								value={this.state.message}
								onChange={this.handleChange('message')}
							/>
						<button type="submit" className="formSubmit waves-effect waves-light btn">SEND</button>
					</form>
				</div>
			</div>
		)
	}
}

function emit(msg) {
	const socket = openSocket();
	socket.emit('message2', msg) 
}