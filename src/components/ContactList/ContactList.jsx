import ContactListItem from "./ContactListItem";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getItems, getFilter } from "../../redux/contacts/contacts-selectors";
import { removePhoneBookContact } from "../../redux/contacts/contacts-operations";
import ListGroup from "react-bootstrap/ListGroup";


const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  let contacts = undefined;

  if (items.length > 0) {
    contacts = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <ListGroup className="listGroup">
      {contacts?.map((item) => (
        <ContactListItem
          key={v4()}
          props={item}
          onDelete={() => dispatch(removePhoneBookContact(item.id))}
        />
      ))}
    </ListGroup>
  );
};

export default ContactList;
