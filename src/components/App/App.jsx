import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectLoading, selectError } from "../../redux/contactsSlice"
import { fetchContacts} from "../../redux/contactsOps"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import "./App.css"

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ContactList />
      </div>
    </>
  )
}

export default App
