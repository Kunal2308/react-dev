import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// heading is an react element that is basically javascript object.
// console.log(heading); // it will return javascript object.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// this render methon is basically responsible for taking this onject and converting it into a h1 tag.

/* 
Create something like this in react.
<div>
  <div>
    <h1>Hi I'm an h1 tag</h1>
  </div>
</div>

*/

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hi There I'm a h1 tag"),
//     React.createElement("h2", {}, "Hi There I'm a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hi There I'm a h1 tag"),
//     React.createElement("h2", {}, "Hi There I'm a h2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a React Element."
// );

// JSX- HTML/XLM like syntax
//JSX (transpiled before it reaches the JS)- PARCEL - Babel
// JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)
// const jsxHeading = <h1 className="head">This is React Element using JSX.</h1>;
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React Component- Javascript Function which return some piece of JSX
//=> Class Based
//=> Funtional Based

// Functional Based Component

// const Title = () => {
//   return (
//     <div id="container">
//       <h1>This is a React Title</h1>;
//     </div>
//   );
// };
// const title = (
//   <div>
//     <Title />
//     <h1 className="head" tabIndex="5">
//       Hi There
//     </h1>
//   </div>
// );

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {Title()}
//       <Title />
//       <Title></Title>
//       {title}
//       {/* Component composition */}
//       <h1>This is a React Component</h1>;
//     </div>
//   );
// };

import Header from "./components/Header";
import Body from "./components/Body";
import { mockData } from "./utils/mockData";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body resList={mockData} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
