import React, { Component } from "react";
import { Input } from 'react-materialize';
import UserMessage from '../userMessage';
import ToggleSwitch from '../toggleSwitch';
import API from '../../utils/API';
import './userMessages.css';
import openSocket from 'socket.io-client';

export default class Messages extends Component {
	state = {
		message: '',
		toggle: 'inbox'
	}
	handleToggleChange = () => {
		this.setState({ toggle: this.state.toggle === 'inbox' ? 'sent' : 'inbox' })
  };
	handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
	};
	handleSubmit = event => {
		console.log(this.props.user);
		event.preventDefault();
		API.createMsg(this.state.message, this.props.user._id)
		.then(response => {
			window.Materialize.toast('Message Sent', 2000);
			emit('New message from your client: ' + this.props.user.username, this.props.user.advisor);
			this.setState({ message: '' });
		})
		.catch(err => console.log(err));
	}
	render() {
		let filteredMessages;
    if(this.state.toggle === 'inbox') {
      //filter down to only messages sent by the advisor
      filteredMessages = this.props.user.messages.filter(message => message.author !== this.props.user.username);
    }
    else if(this.state.toggle === 'sent') {
      //filter down to only messages sent by the user
      filteredMessages = this.props.user.messages.filter(message => message.author === this.props.user.username);
    }
		return (
			<div className="user-messages-container">
				<div className="user-messages-display">
					<div className="user-message-toggle">
						<h4>Messages</h4>
						<ToggleSwitch onChange={this.handleToggleChange} />
					</div>
					{filteredMessages.slice(0).reverse().map(message => 
						<UserMessage message={message} getUser={this.props.getUser} />
					)}
				</div>
				<div className="user-message-form">
					<h4>Compose Message</h4>
					<form onSubmit={this.handleSubmit}>
							<label> To: <span id="advisor-name">{this.props.user.advisor}</span> </label>
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

function emit(msg, advisor) {
	const data = {msg, advisor}
	const socket = openSocket();
	socket.emit('message2', data) 
}