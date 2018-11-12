import React, { Component } from 'react';
import { Col, Card } from 'react-materialize';
import API from '../../utils/API.js';
import '../userMessages/userMessages.css';

export default class UserMessage extends Component {
  removeMessage = () => {
    let id = this.props.message._id;
    API.deleteMessage(id)
    .then(response =>  this.props.getUser())
    .catch(err => console.log(err))
  }
  render() {
    return (
      <Col l={4} m={6} s={12}>
      <Card className="#ffffff white message-card" textClassName="black-text" title={this.props.message.message}>
        <p>{this.props.message.author}</p>
        <p>{this.props.message.created}</p>
        <button className="remove-message-btn" onClick={this.removeMessage}><i className="small material-icons">delete_forever</i></button>
      </Card>
    </Col>
    )
  }
}