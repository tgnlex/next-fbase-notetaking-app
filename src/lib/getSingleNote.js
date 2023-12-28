import {doc, getDocs} from 'firebase/firestore';


const getSingleNote = async () => {
    if (ID) {
        const singleNote = doc(database, 'notes', ID)
        const data = await getDocs(singleNote)
        console.log({ ...data.data(), id: data.id })
    }
}