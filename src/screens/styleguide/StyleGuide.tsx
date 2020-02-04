import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Accordion, Button, Col, Container, ListGroup, Row, useAccordionToggle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StyleGuide.scss';
import StyleGuideRoutes, { ComponentsCatalogue } from './StyleGuideRoutes';

export interface AccordionTogglePropType {
  eventKey: string;
}

export const AccordionToggle: React.FC<AccordionTogglePropType> = ({ children, eventKey }) => {
  const [expanded, setExpanded] = useState(true);
  const decoratedOnClick = useAccordionToggle(eventKey, () => setExpanded(!expanded));

  return (
    <div className="my-2 flex items-center cursor-pointer" onClick={decoratedOnClick}>
      <span className="flex-grow font-bold">{children}</span>
      <FontAwesomeIcon size="xs" icon={expanded ? faChevronUp : faChevronDown} />
    </div>
  );
};

const StyleGuide: React.FC = () => {
  return (
    <React.Fragment>
      <header className="flex">
        <span className="brand text-center">
          <img className="brandImage" src="/assets/images/logo.png" alt="Customer Lobby" />
        </span>
        <span className="headerText">STYLE GUIDE</span>
        <span className="spacer" />
        <span className="version text-center">Version 1</span>
      </header>
      <main>
        <Container fluid>
          <Row>
            <Col className="sidebar pt-4" md={2}>
              {ComponentsCatalogue.map(component => (
                <Accordion key={component.id} defaultActiveKey="0">
                  <AccordionToggle eventKey="0">{component.label}</AccordionToggle>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup variant="flush">
                      {component.links.map(link => (
                        <Link key={link.id} to={link.to}>
                          <Button className="text-left" block variant="light" size="sm">
                            {link.label}
                          </Button>
                        </Link>
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
