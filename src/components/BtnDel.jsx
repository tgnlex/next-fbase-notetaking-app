import {deleteNote} from '../../firebase/firebase';
import styles from '../../styles/EverNote.module.scss';
import {doc} from 'firebase/firestore' 
const DeleteBtn = () => {
  const collectionById = doc(database, 'notes', id)
  

  return (
    <>
      <button
        className={styles.deleteBtn}
        onClick={() => deleteNote(singleNote.id)}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteBtn