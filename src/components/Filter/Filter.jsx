import s from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/contacts-actions";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Filter = () => {
  const dispatch = useDispatch();

  const search = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Form className="form">
     <FloatingLabel label="Filter" className="mb-3">
      <Form.Control className={s.filter} type="text" name="filter" onChange={search} />
      </FloatingLabel>
      </Form>
  );
};

export default Filter;
