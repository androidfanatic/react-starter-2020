import React from 'react';
import Button from 'src/components/button/Button';
import CodePreview from 'src/components/codepreview/CodePreview';

const ButtonStyleGuide: React.FC = () => {
  return (
    <React.Fragment>
      <h4>Buttons</h4>
      <div>
        A button means an operation (or a series of operations). Clicking a button will trigger corresponding business
        logic.
      </div>

      <hr />
      <h5>Basic Styling</h5>
      <div>
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

      <hr />
      <h5>Outline Buttons</h5>
      <div>
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

      <hr />
      <h5>Sizes</h5>
      <div>
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

      <hr />
      <h5>Full Width</h5>
      <div>Create block level buttons - those that span the full width of a parent.</div>
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

      <hr />
      <h5>Full Width</h5>
      <div>Create block level buttons - those that span the full width of a parent.</div>
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

      <hr />
      <h5>Active State</h5>
      <div>
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

      <hr />
      <h5>Disabled State</h5>
      <div>
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
    </React.Fragment>
  );
};

export default ButtonStyleGuide;
