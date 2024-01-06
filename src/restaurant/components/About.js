import User from "./User";
import UserComponent from "./UserClass";

const AboutComponent = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <h3>This is react app</h3>
      <User name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
      <UserComponent name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
    </div>
  );
};

export default AboutComponent;
