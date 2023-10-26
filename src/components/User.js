import React, { useEffect, useState } from "react";

export const User = ({ name, location }) => {
  //   const [count, setCount] = useState(0);
  //   const [count2, setCount2] = useState(0);

  //   useEffect(() => {
  //     timer = setInterval(() => {
  //       console.log("Time Out useEffect");
  //     }, 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  return (
    <div className="user-card">
      {/* <h1>Count1:{count}</h1>
      <h1>Count2:{count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: kp2308@</h3>
    </div>
  );
};
