import { useEffect } from "react";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../redux/contacts/contacts-selectors";
import {
  fetchPhoneBookContacts,
} from "../../redux/contacts/contacts-operations";

const ContactsView = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchPhoneBookContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
