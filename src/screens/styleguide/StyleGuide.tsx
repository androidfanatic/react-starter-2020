import React from 'react';
import { Accordion, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ComponentsCatalogue from './ComponentsCatalogue';
import './StyleGuide.scss';
import StyleGuideRoutes from './StyleGuideRoutes';

const StyleGuide: React.FC = () => {
  return (
    <React.Fragment>
      <header className="flex">
        <span className="brand">
          <img className="brandImage" src="/assets/images/logo.png" alt="Customer Lobby" />
        </span>
        <span className="headerText">STYLE GUIDE</span>
        <span className="spacer" />
        <span className="version">Version 1</span>
      </header>
      <main>
        <Container fluid>
          <Row>
            <Col className="sidebar" md={2}>
              {ComponentsCatalogue.map(component => (
                <Accordion key={component.id} defaultActiveKey="0">
                  <Accordion.Toggle as={Button} variant="link" size="sm" eventKey="0">
                    {component.label}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup variant="flush">
                      {component.links.map(link => (
                        <ListGroup.Item key={link.id}>
                          <Link to={link.to}>{link.label}</Link>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Collapse>
                </Accordion>
              ))}
            </Col>
            <Col md={10}>
              {/** button content */}
              <Container className="content">
                <StyleGuideRoutes />
              </Container>
              {/** end: button content */}
            </Col>
          </Row>
        </Container>
      </main>
      <footer />
    </React.Fragment>
  );
};

export default StyleGuide;
