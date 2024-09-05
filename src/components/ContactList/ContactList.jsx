import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contactsSlice"
import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList
