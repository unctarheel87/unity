import React from 'react';
import { Row, Input } from 'react-materialize';


export default () => (
  <Row>
    <h2>Login</h2>
    <form>
      <Input type="username" label="username" s={12} />
      <Input type="password" label="password" s={12} />
    </form>
  </Row>
)