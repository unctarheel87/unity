import React from 'react';
import { Col, Card } from 'react-materialize';

export default (props) => (
  <Col l={4} m={6} s={12}>
    <Card className='blue-grey darken-1' textClassName='white-text' title={props.data.headline} actions={[<a href={props.data.url} target='_blank' rel='noopener noreferrer'>Read more</a>]}>
    {props.data.summary}
    </Card>
</Col>
);