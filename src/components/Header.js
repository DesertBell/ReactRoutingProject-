import React from 'react';

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/">Home | </a>
    <a href="/search#">Search | </a>
    <a href="/repos">Repos | </a>
    <a href="/contact">Contact | </a>
    <a href="/about">About | </a>
  </div>
);

export default Header;