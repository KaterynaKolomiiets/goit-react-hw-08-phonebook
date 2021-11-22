import { useState } from "react";
import { useDispatch } from "react-redux";
import { usersLogInOperation } from "../../redux/user/user-operations";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const LoginView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateState = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(usersLogInOperation({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h1 className="formHeader">Login </h1>
      <FloatingLabel label="Email" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          required
          onChange={updateState}
        />
      </FloatingLabel>
      <FloatingLabel label="Password" className="mb-3">
        <Form.Control
          type="password"
          name="password"
          required
          onChange={updateState}
        />
      </FloatingLabel>
      <Button type="submit" variant="primary">
        Login
      </Button>
    </Form>
  );
};

export default LoginView;
