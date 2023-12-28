import Header from '../components/Head.jsx';
import styles from '../styles/Home.module.scss';
import NoteOperations from '../components/NoteOps.jsx';
import Details from '../components/NoteDetails.jsx'
import { getSingleNote } from '@/lib/fetchNoteData.js';
import {useState, useEffect} from 'react';
import {collection, doc, addDoc, getDoc } from 'firebase/firestore';
import {fireApp, db} from '../firebase/db.js';
export default function Home() {
  const [ID, setID] = useState(null);
  const [data, setData] = useState(null);

  const getSingleNote = async (id) => {
    setID(id)
}
 



  return (
    <div className={styles.container}>w
      <Header />
      <main className={styles.main}>      
        <div className={styles.container}>
          <div className={styles.left}>   
            <NoteOperations getSingleNote={getSingleNote} />
          </div>
          <div className={styles.right}>
            <Details ID={ID} />
          </div>
        </div>
      </main>
    </div>
  )
}
  

