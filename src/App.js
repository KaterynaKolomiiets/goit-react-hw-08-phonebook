import "./App.css";

import AppBar from "./components/AppBar";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Switch, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from ".//redux/user/user-operations";
import { getIsFetchingCurrentUser } from "./redux/user/user-auth-selectors";


const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrent && (
        <div className="App">
          <AppBar />
          <Container>
            <Row>
              <Col>
                <Switch>
                  <PublicRoute path="/register" restricted exact>
                    <RegisterView />
                  </PublicRoute>

                  <PublicRoute path="/login" restricted exact>
                    <LoginView />
                  </PublicRoute>

                  <PrivateRoute path="/contacts" exact>
                    <ContactsView />
                  </PrivateRoute>
                  <Redirect to="/login" />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default App;
