import React from 'react'
import { Link } from 'react-router-dom';

interface LinkProps {
  link: string, 
  label: string
}

const StyledLink:React.FC<LinkProps> = ({link, label}) => {
  return (
    <Link to={link}>
      <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </Link>
  );
}

export default StyledLink
