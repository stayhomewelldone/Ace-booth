import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    projectId: "ace-booth",

    storageBucket: "gs://ace-booth.appspot.com",
    

}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
