import React from "react";
import { useParams } from 'react-router-dom';
import StyledLink from "./StyledLink";
import CodeHighlighter from "./CodeHighlighter";

interface Params extends Record<string, string | undefined> {
	id: string;
}

const ParamsRouter: React.FC = () => {

    const { id } = useParams<Params>();

	return (
		<div className="App">
        <header className="App-header">
            <p>
            Params: {id}
            </p>

            <StyledLink link='/' label='Home' />
            <CodeHighlighter code={`
import React from "react";
import { useParams } from 'react-router-dom';
import StyledLink from "./StyledLink";
import CodeHighlighter from "./CodeHighlighter";

interface Params extends Record<string, string | undefined> {
    id: string;
}

const ParamsRouter: React.FC = () => {

    const { id } = useParams<Params>();

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Params: {id}
                </p>

                <StyledLink link='/' label='Home' />
                <CodeHighlighter />
            </header>
        </div>
    )
}

export default ParamsRouter;
`}/>
        </header>
    </div>
)
}

export default ParamsRouter;