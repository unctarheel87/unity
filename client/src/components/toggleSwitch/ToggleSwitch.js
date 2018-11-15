import React from 'react';
import './ToggleSwitch.css';

export default (props) => (
  <div className="switch">
    <label onChange={props.onChange}>
      Inbox
      <input type="checkbox" />
      <span className="lever"></span>
      Sent
    </label>
  </div>
);