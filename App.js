import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './src/assets/logo.png'

// Ep-03 Assignmnet 

// create div has title class and three H tags 
const container = React.createElement('div', {class:"title"},[
  React.createElement('H1',{}, "I am H1 tag"),
  React.createElement('h2',{}, "I am H2 tag"),
  React.createElement('h3',{}, "I am H3 tag"),
] );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

// Create same with JSX Syntax

const jsxSyntax = (
  <div className="title">
    <h1>I am Heading one</h1>
    <h2>I am Heading two</h2>
    <h3>I am Heading three</h3>
  </div>
)

// Create with Functional Component and pass attributes and nested component
const num = 100; 
const Title = () => "I am Title"
const FunctionComponent = () => (
  <div classname="title">
    < Title />
    <h1 id="heading">I am H1</h1>
    <h1 number={num}>I am H2 {num}</h1>
    <h1>I am H3</h1>
  </div>
)
root.render(<FunctionComponent/>);

// Create Header from scratch with Functional Component
const Header = () => (
  <div className="header">
    <img src={Logo} alt="logo" />
    <input type="search" placeholder='Search'/>
    <p>Sign Up</p>
  </div>
)

root.render(<Header/>);
