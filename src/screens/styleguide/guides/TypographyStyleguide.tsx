import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ButtonStyleGuide: React.FC = () => {
  return (
    <React.Fragment>
      <h4>Typography</h4>
      <div className="light-text">
        A document, with examples, for typography that includes examples on heading, body text, list and more.
      </div>
      <hr className="thick" />
      <Row>
        <Col sm={2}>
          <Card>
            <Card.Body>
              <h1 className="text-center">Aa</h1>
              <hr />
              <h6 className="light-text">Proxima Nova</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10}>
          <h6 className="light-text font-bold">Proxima Nova</h6>
          <div className="bold-text tracking-widest py-2">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
          <div className="bold-text tracking-widest py-2">a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
          <div className="bold-text tracking-widest py-2">0 1 2 3 4 5 6 7 8 9</div>
          <Row className="py-2 mt-2">
            <Col sm={1}>
              <h1>H1</h1>
            </Col>
            <Col sm={10}>
              <h1>
                The spectacle before us was indeed sublime<span className="light-text pl-1">26px</span>
              </h1>
            </Col>
          </Row>
          <Row className="py-2">
            <Col sm={1}>
              <h2>H2</h2>
            </Col>
            <Col sm={10}>
              <h2>
                The spectacle before us was indeed sublime<span className="light-text pl-1">22px</span>
              </h2>
            </Col>
          </Row>
          <Row className="py-2">
            <Col sm={1}>
              <h3>H3</h3>
            </Col>
            <Col sm={10}>
              <h3>
                The spectacle before us was indeed sublime<span className="light-text pl-1">18px</span>
              </h3>
            </Col>
          </Row>
          <Row className="py-2">
            <Col sm={1}>
              <h4>H4</h4>
            </Col>
            <Col sm={10}>
              <h4>
                The spectacle before us was indeed sublime<span className="light-text pl-1">15px</span>
              </h4>
            </Col>
          </Row>
          <Row className="py-2">
            <Col sm={1}>
              <h5>H5</h5>
            </Col>
            <Col sm={10}>
              <h5>
                The spectacle before us was indeed sublime<span className="light-text pl-1">14px</span>
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ButtonStyleGuide;
