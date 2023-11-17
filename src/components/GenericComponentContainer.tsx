import React from 'react'
import StyledLink from './StyledLink'
import GenericComponentSummary from './GenericComponentSummary';
import CodeHighlighter from './CodeHighlighter';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const userData: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com"
};

const productData: Product = {
  id: 1,
  name: "Smartphone",
  price: 999
};

const GenericComponentContainer:React.FC = () => {
  return (
    <div className="App">
        <header className="App-header">
            <p>Generic Component</p>
            <StyledLink link='/' label='Home' />
            <p>Generic component summary:</p>
            <CodeHighlighter code={`import React from 'react'

interface SummaryProps<T extends object, K extends keyof T> {
  data: T;
  property: K;
}

const GenericComponentSummary = <T extends object, K extends keyof T>({
  data,
  property,
}: SummaryProps<T, K>) => {
  const value = data[property] as string;

  return (
    <div>
      {(typeof property === "string") ? (
        <p>
          {property}: {value}{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default GenericComponentSummary
`} />
            <p>Displaying different attributes:</p>
            <CodeHighlighter code={`
import React from 'react'
import StyledLink from './StyledLink'
import GenericComponentSummary from './GenericComponentSummary';
import CodeHighlighter from './CodeHighlighter';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const userData: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com"
};

const productData: Product = {
  id: 1,
  name: "Smartphone",
  price: 999
};

const GenericComponentContainer:React.FC = () => {
  return (
    <div className="App">
        <header className="App-header">
            <p>Generic Component</p>
            <StyledLink link='/' label='Home' />
            <p>Generic component summary:</p>
            <CodeHighlighter />
            <p>Displaying different attributes:</p>
            <CodeHighlighter />
            <p>Result:</p>
            <GenericComponentSummary<User, "name"> data={userData} property="name" />
            <GenericComponentSummary<Product, "price"> data={productData} property="price" />
        </header>
    </div>
  )
}

export default GenericComponentContainer`} />
            <p>Result:</p>
            <GenericComponentSummary<User, "name"> data={userData} property="name" />
            <GenericComponentSummary<Product, "price"> data={productData} property="price" />
        </header>
    </div>
  )
}

export default GenericComponentContainer
