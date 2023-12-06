import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';


// ! When the Component state changes, the APP component re-executes and children are also re-rendered and re-evaluated
function App() {

const [showParagraph, setShowParagraph] = useState(false);

// ? ! useCallback()
// ! useCallback() => Functoion inside the  useCallback() will not created again if the dependencies are not changed
// ! useCallback() => is used to prevent the component function from re-executing if the dependencies are not changed
// ! It will not create new function for every execution. It use same memory address to upate the changes in memory instead of creating new function(new memory address)
// ! useCallback() => React will save the function memory addresss internally and always reuse the same memory address when the function re-executes
const toggleParagraphHandler = useCallback(() => {
  // ! setShowParagraph() always use the same function memory address
  //  ! so that button will not re-executed when apply React.memo()
  setShowParagraph((prevShowParagraph) => !prevShowParagraph);
}, [])

  console.log('App Running');
  // ! App component Returns JSX is a function that returns HTML
  // ! All the JSX elements are function calls to the respective components funtions, So that the children are re-evaluated
  // ! children are re-evaluated if the props are same as the previous, Because they are part of parent component function body

  // ! If the App component is re-executed, the children are re-executed and re-evaluated

  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
