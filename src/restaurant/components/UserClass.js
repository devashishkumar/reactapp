import React from "react";
import { RESTUARANT_CONSTANTS } from "../../utils/constants";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    // state variable inside class based component
    this.state = {
      count: 10,
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
        login: ""
      },
    };
  }

  async componentDidMount() {
    console.log(
      "in class based components constructor, render, componentDidMount called"
    );
    // service calls
    const data = await fetch(RESTUARANT_CONSTANTS.GITHUB_USER);
    const json = await data.json();
    console.log(json);
    // never update state variables directly like this
    // this.sate.count = this.state.count + 1;
    // use setState to update state variables
    this.setState({userInfo: json});
  }
  render() {
    // const { name, location, contact } = this.props;
    const { count, name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserComponent;
