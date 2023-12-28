import styles from '../styles/Details.module.scss';
import { saveNote } from '../lib/Operations';
const SaveBtn = () => {
  return (
    <button
      onClick={saveNote}
      className={styles.saveBtn}>
        Save Note
    </button>
  )
}