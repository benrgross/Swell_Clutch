import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, Row, Col } from "react-bootstrap";

function getStarted() {
  const router = useRouter();

  const signUp = () => {
    router.push("/api/auth/login");
  };

  return (
    <Container className="signUp__cont">
      <Row className="d-felx justify-content-center">
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
          <Button onClick={signUp} className="signUp__get-started">
            Get Started
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default getStarted;
