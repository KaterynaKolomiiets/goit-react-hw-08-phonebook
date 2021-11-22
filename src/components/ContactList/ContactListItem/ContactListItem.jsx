import PropTypes from "prop-types";
import { removePhoneBookContact } from "../../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ContactListItem = ({ props: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item id={id} className="listItem">
      <span className="contactName">{name}</span>
      <span className="contactPhone">{number}</span>
      <Button
        type="button"
        variant="primary"
        onClick={() => dispatch(removePhoneBookContact(id))}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

ContactListItem.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};
export default ContactListItem;
