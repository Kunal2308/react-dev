import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { RestaurantMenu } from "./components/RestaurantMenu";
// import { Grocery } from "./components/Grocery";
// import { mockData } from "./utils/mockData";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
