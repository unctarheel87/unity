import React from "react";
import { Card } from 'react-materialize';
import "./index.css"

const messageHeader = {
	borderBottom: "2px solid black"
}
const h2Style = {
	textAlign: "center",
}
export default (props) => (
	<div className="advisorWindow">
		<Card className="advHeader z-depth-4">Your Clients</Card>
		{props.users.map(user => (
			<Card className="z-depth-4" key={user._id}>
				<h4>Client Name: {user.username}</h4>
				<hr></hr>
				<p>Currently watching:</p>
				<div className="usersListFlex">
					{user.stocks.map(stock => (
						<div className="clientItem" key={stock._id}>
						{stock.ticker}
						</div>
					))}
				</div>
				<p style={messageHeader}>Messages:</p>
				<ul className="messageLog">
					{user.messages.map(message => (
						<li key={message._id}>({message.updated}) {message.author}: {message.message}</li>
					))}
				</ul>
			</Card>
		))}
	</div>
);