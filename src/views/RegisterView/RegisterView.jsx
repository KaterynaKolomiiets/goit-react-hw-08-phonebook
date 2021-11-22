import { useState } from "react";
import { useDispatch } from "react-redux";
import { usersSignUpOperation } from "../../redux/user/user-operations";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const RegisterView = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateState = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
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
    dispatch(usersSignUpOperation({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <FloatingLabel label="Name and Surname" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name and Surname"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={updateState}
        />
      </FloatingLabel>

      <FloatingLabel label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          required
          onChange={updateState}
        />
      </FloatingLabel>

      <FloatingLabel label="Password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Type your password"
          name="password"
          required
          onChange={updateState}
        />
      </FloatingLabel>

      <Button type="submit" onChange={updateState} variant="primary">
        Register
      </Button>
    </Form>
  );
};

export default RegisterView;
