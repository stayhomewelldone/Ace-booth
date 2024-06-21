import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    storageBucket: "gs://ace-booth.appspot.com",

}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
