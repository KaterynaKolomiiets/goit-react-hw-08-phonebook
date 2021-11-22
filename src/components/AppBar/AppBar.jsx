import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/user/user-auth-selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className="header">
      <Container>
        <Row>
          <Col>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navigation;
