import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ title }) => (
  <React.Fragment>
    <div>{title}</div>
    <hr />
    <Container>
      <Row>
        <Col>
          <div>thiis is first</div>
        </Col>
        <Col>
          <div>this is second</div>
        </Col>
        <Col>
          <div>this is third</div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
export default App;
