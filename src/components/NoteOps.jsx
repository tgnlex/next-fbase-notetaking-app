// Libraries
import {useState, useEffect} from 'react';
import { app, database } from '../firebase/db'  
import {collection, document, addDoc, getDocs } from 'firebase/firestore';
import ReactQuill from 'react-quill';
// Components
import SaveBtn from './BtnSave';
import ToggleBtn from './BtnToggle';
import QuillWrapper from './NoteWrapper';
// Styles
import styles from '../styles/Evernote.module.scss'
import 'react-quill/dist/quill.snow.css';

const NoteOperations =  ({getSingleNote}) => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState(false);
  const [noteDesc, setNoteDesc] = useState('');
  const [notesArray, setNotesArray] = useState([]);
  const dbInstance = collection(database, 'notes')
  
  
  

   
    
  
  useEffect(() => {
    getNotes();
  }, [])

  
  return (
    <>
      <div className={styles.btnContainer}>
        <ToggleBtn />
      </div>
    {isInputVisible ? (
      <>
        <div className={styles.inputContainer}>
          <input 
            className={styles.input}
            placeholder='Enter the Title..' 
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          </div>
          <div className={styles.ReactQuill}>
            <QuillWrapper>
            <ReactQuill
              onChange={addDesc}
              value={noteDesc}
            />
            </QuillWrapper>
            <SaveBtn />
          </div>
          
        </>
      ) : (
        <>
          <div className={styles.noteDisplay}>
            {notesArray.map((note) => {
              <div 
                className={styles.notesInner}
                onClick={() => getSingleNote(note.id)}>                 
                <h4>
                  {note.noteTitle}
                </h4>                
                <div dangerouslySetInnerHTML={{ __html: note.noteDesc }}></div>
              </div>      
            })}
          </div>           
        </>    
      )}; 
    </> 
  )
}

export default NoteOperations;