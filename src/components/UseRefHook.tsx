import React, { useEffect, useRef } from "react";
import StyledLink from "./StyledLink";
import CodeHighlighter from "./CodeHighlighter";

const UseRefHook: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const focusRef = () => {
    if (ref.current) ref.current.focus();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>useRef Hook</p>
        <StyledLink link="/" label="Home" />
        <br />
        <input type="text" ref={ref} />
        <br />
        <button onClick={() => focusRef()}>Focus</button>
        <CodeHighlighter code ={`import React, { useEffect, useRef } from "react";
import StyledLink from "./StyledLink";
import CodeHighlighter from "./CodeHighlighter";

const UseRefHook: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const focusRef = () => {
    if (ref.current) ref.current.focus();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>useRef Hook</p>
        <StyledLink link="/" label="Home" />
        <br />
        <input type="text" ref={ref} />
        <br />
        <button onClick={() => focusRef()}>Focus</button>
        <CodeHighlighter />
      </header>
    </div>
  );
};

export default UseRefHook;`}/>
      </header>
    </div>
  );
};

export default UseRefHook;
