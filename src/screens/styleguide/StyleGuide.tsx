import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Accordion, Col, Container, Row, useAccordionToggle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StyleGuideRoutes, { ComponentsCatalogue } from 'src/routes/StyleGuideRoutes';
import './StyleGuide.scss';

export interface AccordionTogglePropType {
  eventKey: string;
}

export const AccordionToggle: React.FC<AccordionTogglePropType> = ({ children, eventKey }) => {
  const [expanded, setExpanded] = useState(true);
  const toggleAccordion = useAccordionToggle(eventKey, () => setExpanded(!expanded));

  return (
    <h6 className="py-2 flex items-center cursor-pointer" onClick={toggleAccordion}>
      <span className="flex-grow font-bold">{children}</span>
      <FontAwesomeIcon size="xs" icon={expanded ? faChevronUp : faChevronDown} />
    </h6>
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
                    <React.Fragment>
                      {component.links.map(link => (
                        <Link key={link.id} to={link.to}>
                          <h6>{link.label}</h6>
                        </Link>
                      ))}
                    </React.Fragment>
                  </Accordion.Collapse>
                </Accordion>
              ))}
            </Col>
            <Col md={10}>
              <Container className="content">
                <StyleGuideRoutes />
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
      <footer />
    </React.Fragment>
  );
};

export default StyleGuide;
