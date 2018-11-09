import React from "react";
import { Card } from 'react-materialize';
import "./index.css"
 
export default (props) => (
	<div>
		<h1>Your Clients</h1>
			{props.users.map(user => (
					<Card key={user._id}>
						<h4>{user.username}</h4>
						<p>Currently watching:</p>
						<ul>
						{user.stocks.map(stock => (
							<li key={stock._id}>{stock.ticker}</li>
						))}
						</ul>
						<p>Messages:</p>
						<ul>
						{user.messages.map(message => (
							<li key={message._id}>{message.message} : {message.author} - {message.updated}</li>
						))}
						</ul>
					</Card>
			))}
	</div>
);