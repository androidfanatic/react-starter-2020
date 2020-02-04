import { faChevronLeft, faChevronRight, faCog, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'src/components/button/Button';
import CodePreview from 'src/components/codepreview/CodePreview';

const ButtonStyleGuide: React.FC = () => {
  return (
    <React.Fragment>
      <h4>Buttons</h4>
      <div className="light-text">
        A button means an operation (or a series of operations). Clicking a button will trigger corresponding business
        logic.
      </div>

      <hr className="thick" />
      <h6 className="font-bold">Basic Styling</h6>
      <div className="light-text">
        Includes several predefined button styles, each serving its own semantic purpose, thrown in for more control.
      </div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button className="mr-2">Default</Button>
            <Button variant="light" className="mr-2">
              Normal
            </Button>
          </React.Fragment>
        }
        code={`<Button>Default</Button>
<Button variant="light">Normal</Button>`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Outline Buttons</h6>
      <div className="light-text">
        In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with
        the .btn-outline-* ones to remove all background images and colors on any button.
      </div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button variant="outline-primary" className="mr-2">
              Primary
            </Button>
            <Button variant="outline-secondary" className="mr-2">
              Secondary
            </Button>
            <Button variant="outline-danger" className="mr-2">
              Danger
            </Button>
          </React.Fragment>
        }
        code={`<Button variant="outline-primary">Primary</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-danger">Danger</Button>`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Sizes</h6>
      <div className="light-text">
        In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with
        the .btn-outline-* ones to remove all background images and colors on any button.
      </div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button size="sm" className="mr-2">
              Small
            </Button>
            <Button className="mr-2">Normal</Button>
            <Button size="lg" className="mr-2">
              Large
            </Button>
          </React.Fragment>
        }
        code={`<Button size="sm">Small</Button>
<Button>Normal</Button>
<Button size="lg">Large</Button>`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Full Width</h6>
      <div className="light-text">Create block level buttons - those that span the full width of a parent.</div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button block>Primary</Button>
            <Button block variant="outline-primary">
              Secondary
            </Button>
          </React.Fragment>
        }
        code={`<Button>Primary</Button>
<Button block variant="outline-primary">Secondary</Button>`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Active State</h6>
      <div className="light-text">
        Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active and also by
        adding <code>active</code> prop.
      </div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button active className="mr-2">
              Default
            </Button>
            <Button active variant="light">
              Normal
            </Button>
          </React.Fragment>
        }
        code={`<Button active>Default</Button>
<Button active variant="light">Normal</Button>`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Disabled State</h6>
      <div className="light-text">
        Make buttons appear disabled by adding <code>disabled</code> prop to any button element.
      </div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button disabled className="mr-2">
              Default
            </Button>
            <Button disabled variant="light" className="mr-2">
              Normal
            </Button>
            <Button disabled variant="outline-primary" className="mr-2">
              Primary
            </Button>
            <Button disabled variant="outline-secondary" className="mr-2">
              Secondary
            </Button>
            <Button disabled variant="outline-danger" className="mr-2">
              Danger
            </Button>
          </React.Fragment>
        }
        code={`<Button disabled>Default</Button>
<Button disabled variant="light">Normal</Button>
<Button disabled variant="outline-primary">Primary</Button>
<Button disabled variant="outline-secondary">Secondary</Button>
<Button disabled variant="outline-danger">Danger</Button>`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Rounded Corner</h6>
      <div className="light-text">
        Make buttons rounded by adding the utility class <code>rounded-pill</code> to the buttons.
      </div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button className="rounded-pill mr-2">Default</Button>
            <Button variant="outline-primary" className="rounded-pill  mr-2">
              Normal
            </Button>
          </React.Fragment>
        }
        code={`<Button className="rounded-pill">Default</Button>
<Button variant="outline-primary" className="rounded-pill">Normal</Button>
`}
      />

      <hr className="thick" />
      <h6 className="font-bold">Icon Buttons</h6>
      <div className="light-text">Make icon buttons by add icons from fontawesome icon library.</div>
      <CodePreview
        elements={
          <React.Fragment>
            <Button className="btn-icon mr-2">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button className="mr-2">
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
            <Button variant="outline-primary" className="mr-2">
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button variant="outline-primary" className="mr-2">
              <FontAwesomeIcon icon={faCog} />
            </Button>
          </React.Fragment>
        }
        code={`<Button><FontAwesomeIcon icon={faChevronLeft} /></Button>
<Button><FontAwesomeIcon icon={faChevronRight} /></Button>
<Button variant="outline-primary"><FontAwesomeIcon icon={faPencilAlt} /></Button>
<Button variant="outline-primary"><FontAwesomeIcon icon={faCog} /></Button>`}
      />
    </React.Fragment>
  );
};

export default ButtonStyleGuide;
