import React from 'react';
import StyledLink from './StyledLink';

const Home: React.FC = () => (
	<div className="App">
      <header className="App-header">
        <p>
          React app for learning TS
        </p>
        <StyledLink link='/params/42' label='Params Router' />
        <StyledLink link='/statetochildren' label='State and Props to Children' />
        <StyledLink link='/userefhook' label='useRef Hook' />
        <StyledLink link='/genericcomponent' label='Generic component' />
      </header>
    </div>
);

export default Home;