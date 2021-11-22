import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addPhoneBookContact } from "../../redux/contacts/contacts-operations";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const updateState = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPhoneBookContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <FloatingLabel label="Name and Surname" className="mb-3">
        <Form.Control
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={updateState}
          value={name}
        />
      </FloatingLabel>
      <FloatingLabel label="Number" className="mb-3">
        <Form.Control
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={updateState}
          value={number}
        />
      </FloatingLabel>
      <Button type="submit" variant="primary">
        Add Contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
