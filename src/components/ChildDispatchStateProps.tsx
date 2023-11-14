import React, { Dispatch, SetStateAction } from 'react'
import CodeHighlighter from './CodeHighlighter'

interface ChildProps {
    counter: number,
    setCounter: Dispatch<SetStateAction<number>>
}

const ChildDispatchStateProps:React.FC<ChildProps> = ({ counter, setCounter }) => {
  return (
    <>
        <p>Children</p>
        <p>Prop State: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
        <CodeHighlighter code={`import React, { Dispatch, SetStateAction } from 'react'
import CodeHighlighter from './CodeHighlighter'

interface ChildProps {
    counter: number,
    setCounter: Dispatch<SetStateAction<number>>
}

const ChildDispatchStateProps:React.FC<ChildProps> = ({ counter, setCounter }) => {
  return (
    <>
        <p>Children</p>
        <p>Prop State: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
        <CodeHighlighter />
    </>
  )
}

export default ChildDispatchStateProps`}/>
    </>
  )
}

export default ChildDispatchStateProps
