import React from "react";
import ReactDOM from "react-dom";
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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi There I'm a h1 tag"),
    React.createElement("h2", {}, "Hi There I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi There I'm a h1 tag"),
    React.createElement("h2", {}, "Hi There I'm a h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
