import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function GetStarted() {
  const router = useRouter();

  return (
    <Container className="signUp__cont">
      <Row>
        <Col></Col>
        <Col md={8}>
          <h2 className="signUp__h2 text-center">Start Saving Swells Now</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <Button
            className="signUp__get-started"
            onClick={() => router.push("/api/auth/login")}
          >
            Get Started
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
