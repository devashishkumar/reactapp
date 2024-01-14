import User from "./User";
import UserComponent from "./UserClass";
import UserContext from "../../utils/UserContext";

const AboutComponent = () => {
  return (
    <div className="about m-4 p-4 w-[250px] rounded-lg bg-gray-50">
      <h2>About</h2>
      <div>Logged In User
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <User name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <UserComponent name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
    </div>
  );
};

export default AboutComponent;
