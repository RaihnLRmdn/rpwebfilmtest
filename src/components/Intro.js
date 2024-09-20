import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <h1 className="title">TEMUKAN DAN NIKMATI</h1>
            <h1 className="title">FILM FAVORIT ANDA</h1>
            <div className="button-container mt-4 text-center">
              <Button variant="dark" href="#trending">
                Lihat Semua List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
