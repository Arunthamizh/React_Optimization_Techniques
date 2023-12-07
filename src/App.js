import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';


// ! When the Component state changes, the APP component re-executes and children are also re-rendered and re-evaluated
function App() {
  // * useState()
// ! useState is managed by React and connection with the component for us
//  ! useState() =>  default value is essentially consider once when the component is executed first time
// ! .... If it executes first time then the useState() create a new state variable and set it to default value
// ! If we update 2 state in a function one after another then react batched(grouped) it and consider as one so it re-executes and evaluates onces 
// ! ... even though we update 2 state in a function one after another then react batched(grouped) it and consider as one so it re-executes and evaluates onces
const [showParagraph, setShowParagraph] = useState(false);
const [allowToggle, setAllowToggle] = useState(false);

// ? ! useCallback()
// ! useCallback() => Functoion inside the  useCallback() will not created again if the dependencies are not changed
// ! useCallback() => is used to prevent the component function from re-executing if the dependencies are not changed
// ! It will not create new function for every execution. It use same memory address to upate the changes in memory instead of creating new function(new memory address)
// ! useCallback() => React will save the function memory addresss internally and always reuse the same memory address when the function re-executes
// ! useCallback() => [] dependencies are same as useEffect();
// !useCallback () => Allow us to save a function and reuse it.
const toggleParagraphHandler = useCallback(() => {
  // ! setShowParagraph() always use the same function memory address
  //  ! so that button will not re-executed when apply React.memo()
  // ! here the allowToggle is closure it holds the previous value when the app is executed at first time
  // ! .. if we changed the allowToggle => as true at that time also it holds the previous value so that it will not re-executed
  // ! .. to prevent that we use dependencies[] to mention if any changes in the dependencies then re-executed it 
  // ! .. this ensure that it will use the latest value
  if(allowToggle){
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }
}, [allowToggle])

const allowToggleHandler = () => {
  setAllowToggle(true);
}

  console.log('App Running');
  // ! App component Returns JSX is a function that returns HTML
  // ! All the JSX elements are function calls to the respective components funtions, So that the children are re-evaluated
  // ! children are re-evaluated if the props are same as the previous, Because they are part of parent component function body

  // ! If the App component is re-executed, the children are re-executed and re-evaluated

  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={showParagraph}/>
     <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
