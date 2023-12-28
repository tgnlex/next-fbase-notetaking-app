import {doc, getDoc, getDocs, collection, updateDoc} from 'firebase/firestore' 
import editNote from '../lib/Operations'
import { database } from '../firebase/db'
const EditBtn = (id) => {
  const collectionById = doc(database, 'notes', id)

  updateDoc(collectionById, {
    noteTitle: noteTitle, 
    noteDesc: noteDesc,
  })
  .then(() => {
    window.location.reload();
  })
  return (
    <button 
      onClick={() => editNote(singleNote(singleNote.id))}
      className={styles.saveBtn}>
        Update Note
    </button>
  )
}

export default EditBtn;