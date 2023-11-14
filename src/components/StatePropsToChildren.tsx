import React, { useState } from 'react'
import StyledLink from './StyledLink'
import ChildDispatchStateProps from './ChildDispatchStateProps'
import CodeHighlighter from './CodeHighlighter'

const StatePropsToChildren:React.FC = () => {
  
  const [counter, setCounter] = useState<number>(0)
  return (
    <div className="App">
        <header className="App-header">
            <p>State and Props to Children</p>
            <StyledLink link='/' label='Home' />
            <p>Counter: {counter}</p>
            <CodeHighlighter code={`import React, { useState } from 'react'
import StyledLink from './StyledLink'
import ChildDispatchStateProps from './ChildDispatchStateProps'
import CodeHighlighter from './CodeHighlighter'

const StatePropsToChildren:React.FC = () => {
  
  const [counter, setCounter] = useState<number>(0)
  return (
    <div className="App">
        <header className="App-header">
            <p>State and Props to Children</p>
            <StyledLink link='/' label='Home' />
            <p>Counter: {counter}</p>
            <CodeHighlighter />
            <ChildDispatchStateProps counter={counter} setCounter={setCounter} />
        </header>
    </div>
  )
}

export default StatePropsToChildren`} />
            <ChildDispatchStateProps counter={counter} setCounter={setCounter} />
        </header>
    </div>
  )
}

export default StatePropsToChildren
