import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

// ! When the Component state changes, the APP component re-executes and children are also re-rendered and re-evaluated
function App() {

const [showParagraph, setShowParagraph] = useState(false);
  console.log('App Running');
  // ! Returns JSX is a function that returns HTML
  // ! All the JSX elements are function calls to the respective components funtions, So that the children are re-evaluated
  // ! children are re-evaluated if the props are same as the previous, Because they are part of parent component function body

  // ! If the App component is re-executed, the children are re-executed and re-evaluated

  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={false}/>
      <Button onClick={() => setShowParagraph(!showParagraph)}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
