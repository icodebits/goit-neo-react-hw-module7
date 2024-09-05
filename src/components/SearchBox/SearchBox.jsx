import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"
import styles from "./SearchBox.module.css"

const SearchBox = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter)

    const handleChange = (event) => {
      dispatch(changeFilter(event.target.value))
    }

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.searchLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.searchInput}
        id="search"
        name="search"
      />
    </div>
  )
}

export default SearchBox
