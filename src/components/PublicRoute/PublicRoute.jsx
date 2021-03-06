import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/user/user-auth-selectors";

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRoute;
