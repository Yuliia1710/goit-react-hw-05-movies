import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>This page not found</p>
      <NavLink to="/">Go to the main page</NavLink>
    </div>
  );
};

export default NotFound;
