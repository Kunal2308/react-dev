import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "",
        type: "",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");
    // this.timer = setInterval(() => {
    //   console.log("Time Out");
    // }, 1000);
    const data = await fetch("https://api.github.com/users/Kunal2308");
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
    console.log(response);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    // clearInterval(this.timer);
  }
  render() {
    const { login, type, avatar_url } = this.state.userInfo;
    // const { count, count2 } = ;
    return (
      <div className="user-card">
        {/* {console.log(this.state.name + "Child Render")} */}
        {/* <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2:{count2}</h1> */}
        <img src={avatar_url} alt="img"></img>
        <h2>Name: {login}</h2>
        <h3>Location: {type}</h3>
        <h3>Contact: kp2308@</h3>
      </div>
    );
  }
}

export default UserClass;
