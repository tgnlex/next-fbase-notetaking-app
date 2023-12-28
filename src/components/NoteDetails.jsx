// Libraries
import {useEffect} from 'react';
import {app, database} from '../firebase/db.js';
import ReactQuill from 'react-quill';
// Components
import EditBtn from './BtnEdit.jsx';
import DeleteBtn from './BtnDel.jsx';
import QuillWrapper from './NoteWrapper.jsx';
// Functions
import getNotes from '../lib/getNotes.js';
import getData from '../lib/getSingleNote.js';
// Styles
import styles from '../styles/Details.module.scss';
import 'react-quill/dist/quill.snow.css'
const Details = ({ID}) => { 
  const [isEdit, setIsEdit] = (false);
  const [singleNote, setSingleNote] = useState({})
  setSingleNote({ ...data.data(), id: data.id })
  
  useEffect(() => {
    getNotes();
  }, [])
    return (
    <>  
      <h2>{singleNote.noteTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: singleNote.noteDetails}}></div>
      {isEdit ? (
        <div className={styles.inputContainer}>
          <input 
            className={styles.input}
            placeholder='Enter the Title..'
            value={singleNote.noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <div className={styles.ReactQuill}>
  
            <ReactQuill
              value={singleNote.noteDesc} 
               onChange={getEditData} 
              />
          </div>
         <button className={styles.saveBtn}>
          Update Note
         </button>
        </div>  
        ) : (
          <>
            <div className={styles.btnContainer}>
              <EditBtn />
              <DeleteBtn />
            </div>
          </>
      )}
    </>
  )
}

export default NoteDetails;