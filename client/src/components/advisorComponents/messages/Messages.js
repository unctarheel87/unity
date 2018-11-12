import React, { Component } from "react";
import "./index.css"
import { Input } from 'react-materialize';
import API from '../../../utils/API';
import openSocket from 'socket.io-client';

export default class Messages extends Component {
	state= {
		message: '',
		user: ''
	}
	handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
	};
	handleSubmit = event => {
		event.preventDefault();
		API.createMsg(this.state.message, this.state.user)
		.then(response => {
			window.Materialize.toast("Message Sent", 10000)
			emit('New message from your advisor: ' + this.props.advisor.username);
			this.setState({
				message: '',
				user: ''
			});
		})
		.catch(err => console.log(err))
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>New Message</h2>
						<Input s={6} 
						  required 
              type='select' 
              label="Client:" 
              onChange={this.handleChange('user')}
              value={this.state.user}
              className="sign-up-as"
            >
							<option></option>
							 {this.props.users.map(user => (
                <option value={user._id}>{user.username}</option>
              ))}
						</Input>
						<Input
						  required 
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

function emit(msg) {
	const socket = openSocket();
	socket.emit('message', msg) 
}