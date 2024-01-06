import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h2>Oops!</h2>
      <h3>Something went wrong</h3>
      <h4>Status: {error.status} Message: {error.statusText}</h4>
    </div>
  );
};

export default ErrorComponent;
