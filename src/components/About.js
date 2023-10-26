import { Component } from "react";
// import { User } from "./User";
import UserClass from "./UserClass";
import { User } from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    return (
      <div>
        {console.log("Parent render")}
        <h1>About</h1>
        <h2>This is about us page</h2>
        <UserClass name={"First"} location={"Kolkata"} />
        {/* <UserClass name={"Second"} location={"Kolkata"} /> */}
        {/* <User /> */}
      </div>
    );
  }
}

// React LifeCycle Method
//-Render Phase-> Constructor,Render
//-Commit Phase-> DOM updatetion, componentDidMount()

//Parent Constructor
//Parent Render

//First Constructor
//First Render

//Second Constructor
//Second Render

// First componentDidMount
// Second componentDidMount

//Parent componentDidMount

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about us page</h2>
//       {/* <User name={"Kunal Prasad"} location={"Kolkata"} /> */}
//       <UserClass name={"Kunal Prasad"} location={"Kolkata"} />
//     </div>
//   );
// };
export default About;
