import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsSlice"
import { FaUser, FaPhone } from "react-icons/fa"
import styles from "./Contact.module.css"

const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <FaUser className={styles.icon} />
          <span className={styles.contactName}>{contact.name}</span>
        </div>
        <div className={styles.contactInfo}>
          <FaPhone className={styles.icon} />
          <span className={styles.contactNumber}>{contact.number}</span>
        </div>
      </div>
      <div className={styles.deleteButtonContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Contact
