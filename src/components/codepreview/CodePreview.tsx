import React from 'react';
import { Button, Card } from 'react-bootstrap';

export interface CodePreviewProps {
  label?: string;
  elements: React.ReactNode;
  code?: string;
}

const CodePreview: React.FC<CodePreviewProps> = props => {
  return (
    <Card className="code-preview">
      <div className="code-preview-label">{props.label}</div>
      <div className="code-preview-elements">{props.elements}</div>
      {props.code !== '' ? (
        <code className="code-preview-code">
          <Button size="sm" variant="light" className="copy-button">
            Copy
          </Button>
          <pre>{props.code}</pre>
        </code>
      ) : null}
    </Card>
  );
};

CodePreview.defaultProps = {
  label: 'Preview',
  code: '',
};

export default CodePreview;
