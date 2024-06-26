import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: "ace-booth",
    storageBucket: "gs://ace-booth.appspot.com",
    
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db };
