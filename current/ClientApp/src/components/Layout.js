import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

export default props => (
  <div>
  <NavMenu />
  <Grid fluid>
  
    <Row>
      <Col lg={12}>
        {props.children}
      </Col>
    </Row>
  </Grid>
  </div>
);
