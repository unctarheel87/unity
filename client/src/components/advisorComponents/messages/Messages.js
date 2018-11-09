import React, { Component } from "react";
import "./index.css"
import { Input } from 'react-materialize';
import API from '../../../utils/API';

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
		API.createMsg(this.state.message, this.state.user);	
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>New Message</h2>
						<Input s={6} 
              type='select' 
              label="Client:" 
              onChange={this.handleChange('user')}
              value={this.state.user}
              className="sign-up-as"
            >
							 {this.props.users.map(user => (
                <option value={user._id}>{user.username}</option>
              ))}
						</Input>
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