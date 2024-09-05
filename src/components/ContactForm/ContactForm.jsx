import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsSlice"
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        number: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(50, "Must be 50 characters or less")
            .required("Required"),
    })

    const initialValues = {
        name: "",
        number: "",
    }
  
    const handleSubmit = (values, { resetForm }) => {
      dispatch(addContact(values.name, values.number))
      resetForm()
    }

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                className={styles.inputField}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.errorMessage}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="number">Number</label>
              <Field
                type="text"
                name="number"
                id="number"
                className={styles.inputField}
              />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.errorMessage}
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!isValid || isSubmitting}
            >
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    );
}

export default ContactForm
