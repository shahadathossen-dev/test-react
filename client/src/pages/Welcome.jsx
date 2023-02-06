import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function Welcome() {
  const { user } = useAuth();
  return (
    <Container className="flex-grow-1 d-flex justify-content-center p-5">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <p className="text-center">Welcome</p>
            </Card.Header>
            <Card.Body>
              <h1>{user.name}</h1>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link to="profile" className="btn btn-primary">Edit your profile</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
