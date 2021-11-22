import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Switch, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect, Suspense} from "react";
import { fetchCurrentUser } from ".//redux/user/user-operations";
import { getIsFetchingCurrentUser } from "./redux/user/user-auth-selectors";

const AppBar = lazy(() =>
  import("./components/AppBar" /*webpackChunkName: "AppBar" */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /*webpackChunkName: "RegisterView" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /*webpackChunkName: "LoginView" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /*webpackChunkName: "ContactsView" */)
);
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute" /*webpackChunkName: "PrivateRoute" */)
);
const PublicRoute = lazy(() =>
  import("./components/PublicRoute" /*webpackChunkName: "PublicRoute" */)
);


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
          <Suspense fallback={<h1>LOADING...</h1>}>
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
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
