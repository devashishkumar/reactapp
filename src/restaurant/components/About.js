import User from "./User";
import UserComponent from "./UserClass";

const AboutComponent = () => {
  return (
    <div className="about m-4 p-4 w-[250px] rounded-lg bg-gray-50">
      <h2>About</h2>
      <User name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
      <UserComponent name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
    </div>
  );
};

export default AboutComponent;
