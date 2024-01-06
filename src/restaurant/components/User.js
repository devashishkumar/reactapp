import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  // state variable inside function based component
  const [count] = useState(10);

  useEffect(() => {
    // service calls
  }, []);
  return (
    <div className="about">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
