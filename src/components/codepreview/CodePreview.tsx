import React, { useRef, useState } from 'react';
import { Button, Card, Overlay, Tooltip } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import './CodePreview.scss';

export interface CodePreviewProps {
  label?: string;
  elements: React.ReactNode;
  code?: string;
}

const CodePreview: React.FC<CodePreviewProps> = props => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const setTooltipVisibleTemporarily = (visible: boolean) => {
    setTooltipVisible(visible);
    setTimeout(() => setTooltipVisible(false), 1000);
  };
  const target = useRef(null);

  return (
    <Card className="code-preview">
      <div className="light-text code-preview-label">{props.label}</div>
      <div className="code-preview-elements">{props.elements}</div>
      {props.code !== '' ? (
        <code className="code-preview-code">
          <CopyToClipboard onCopy={() => setTooltipVisibleTemporarily(true)} text={props.code ?? ''}>
            <Button ref={target} size="sm" variant="link" className="copy-button">
              Copy
            </Button>
          </CopyToClipboard>
          <Overlay target={target.current ?? undefined} show={tooltipVisible} placement="right">
            <Tooltip id="overlay-example" {...props}>
              Copied
            </Tooltip>
          </Overlay>
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
