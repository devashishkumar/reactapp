import User from "./User";
import UserComponent from "./UserClass";

const AboutComponent = () => {
  return (
    <div className="about m-4 p-4 w-[250px] rounded-lg bg-gray-50">
      <h2>About</h2>
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <User name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <UserComponent name={"Ashish Kumar"} location={"India"} contact={"devashishkumar"}/>
    </div>
  );
};

export default AboutComponent;
