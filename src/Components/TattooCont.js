//Imports de React-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";

//Vínculo css
import "../Styles/TattooCont.css";

//Importación de imágenes
import Promo1 from "../Assets/CarousselPromos/Promo1.jpg";
import Promo2 from "../Assets/CarousselPromos/Promo2.jpg";
import Promo3 from "../Assets/CarousselPromos/Promo3.jpg";

function ImgCont() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <img src={Promo1} onClick={handleShow} alt="img1" id="ImgTattoo" />
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel fade >
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattooModal"
                src={Promo1}
                alt="First slide"
                onClick={handleShow}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattooModal"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattooModal"
                src={Promo3}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

function TattooCont() {
  return (
    <Container>
      <Row>
        <Col className="ContTattoo">
          <Carousel fade className="Card1">
            {/*Primera imagen */}
            <Carousel.Item>
              <ImgCont></ImgCont>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col className="ContTattoo">
          {" "}
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="ContTattoo">
          {" "}
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col className="ContTattoo">
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="ContTattoo">
          {" "}
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="ContTattoo">
          {" "}
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col className="ContTattoo">
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="ContTattoo">
          {" "}
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="ContTattoo">
          {" "}
          <Carousel fade className="Card1">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="ImgTattoo"
                src={Promo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default TattooCont;
