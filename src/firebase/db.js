import firebaseConfig from './config';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
export const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp);

initializeApp(firebaseConfig);