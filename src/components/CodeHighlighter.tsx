import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeHighlighterParams {
    code: string;
}

const CodeHighlighter:React.FC<CodeHighlighterParams> = ({code}) => {
  return (
    <div className='code-container'>
        <SyntaxHighlighter language="typescript" style={atomDark} wrapLines>
        {code}
        </SyntaxHighlighter>
    </div>
  );
}

export default CodeHighlighter;
