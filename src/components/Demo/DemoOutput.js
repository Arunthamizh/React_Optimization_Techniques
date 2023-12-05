import React from 'react';

const DemoOutput = (props) => {
    console.log('DemoOutput Running');
    return <p>{props.show ? 'This is new!': ''}</p>
}

// ! React.memo() is used to prevent the component from re-executing if the props are same
// ! It re-executes if the props are not same, It is a performance optimization

// ! need to decide if to use React.memo() or not to use it Because if the child components are always dependent on props, then we dont need to use it
// ! React.memo() it checks the previous props and the new props every time, so it is costly
// ! But if the child components are not dependent on props always, then we need to use it....

// ! We can use  React.memo key part of child components instead of do to all components // Suggestion:
export default React.memo(DemoOutput);