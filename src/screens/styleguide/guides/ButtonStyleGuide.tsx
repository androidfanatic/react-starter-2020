import React from 'react';
import CLSButton from 'src/components/button/Button';
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
            <CLSButton className="mr-2">Default</CLSButton>
            <CLSButton variant="light" className="mr-2">
              Normal
            </CLSButton>
          </React.Fragment>
        }
        code={`<CLSButton>Default</CLSButton>
<CLSButton variant="light">Normal</CLSButton>`}
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
            <CLSButton variant="outline-primary" className="mr-2">
              Primary
            </CLSButton>
            <CLSButton variant="outline-secondary" className="mr-2">
              Secondary
            </CLSButton>
            <CLSButton variant="outline-danger" className="mr-2">
              Danger
            </CLSButton>
          </React.Fragment>
        }
        code={`<CLSButton variant="outline-primary">Primary</CLSButton>
<CLSButton variant="outline-secondary">Secondary</CLSButton>
<CLSButton variant="outline-danger">Danger</CLSButton>`}
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
            <CLSButton size="sm" className="mr-2">
              Small
            </CLSButton>
            <CLSButton className="mr-2">Normal</CLSButton>
            <CLSButton size="lg" className="mr-2">
              Large
            </CLSButton>
          </React.Fragment>
        }
        code={`<CLSButton size="sm">Small</CLSButton>
<CLSButton>Normal</CLSButton>
<CLSButton size="lg">Large</CLSButton>`}
      />

      <hr />
      <h5>Full Width</h5>
      <div>Create block level buttons - those that span the full width of a parent.</div>
      <CodePreview
        elements={
          <React.Fragment>
            <CLSButton block>Primary</CLSButton>
            <CLSButton block variant="outline-primary">
              Secondary
            </CLSButton>
          </React.Fragment>
        }
        code={`<CLSButton>Primary</CLSButton>
<CLSButton block variant="outline-primary">Secondary</CLSButton>`}
      />
    </React.Fragment>
  );
};

export default ButtonStyleGuide;
