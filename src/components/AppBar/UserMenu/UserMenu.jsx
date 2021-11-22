import { usersLogoutOperation } from "../../../redux/user/user-operations";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../../redux/user/user-auth-selectors";
import Button from "react-bootstrap/Button";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(userName);
  return (
    <>
      <div className="nav">
        <span className="userWelcomeMessage">
          Welcome, <span className="userName">{user}</span>
        </span>
        <Button
          type="button"
          variant="primary"
          onClick={() => dispatch(usersLogoutOperation())}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default UserMenu;
