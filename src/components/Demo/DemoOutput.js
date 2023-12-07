import React, { useMemo } from "react";

const DemoOutput = (props) => {
  console.log("🚀 ~ file: DemoOutput.js:4 ~ DemoOutput ~ props:", props);

   // * useMemo()
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("sortedList Running with useMemo");
    return items.sort((a, b) => a - b);
  }, [items]);
  // * the below sortedList will called again and again when the items are not changed.
  // * .. To avoid that we use useMemo() in the above sortedList, so it will be called if any changes in the items
  // console.log("sortedList Running without useMemo");
  // const sortedList = items.slice().sort((a, b) => a - b);
;
  console.log("DemoOutput Running");
  return (
    <>
      <ul>
        {sortedList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <p>{props.show ? "This is new!" : ""}</p>
    </>
  );
};

// ! React.memo() is used to prevent the component from re-executing if the props are same
// ! It re-executes if the props are not same, It is a performance optimization

// ! need to decide if to use React.memo() or not to use it Because if the child components are always dependent on props, then we dont need to use it
// ! React.memo() it checks the previous props and the new props every time, so it is costly
// ! But if the child components are not dependent on props always, then we need to use it....

// ! We can use  React.memo key part of child components instead of do to all components // Suggestion:
export default React.memo(DemoOutput);