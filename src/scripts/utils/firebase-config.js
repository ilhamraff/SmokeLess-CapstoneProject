// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDj6JxW242-4LXWfHEqF9Qp_NWATnOGxvY',
  authDomain: 'smokeless-web.firebaseapp.com',
  databaseURL: 'https://smokeless-web-default-rtdb.firebaseio.com',
  projectId: 'smokeless-web',
  storageBucket: 'smokeless-web.appspot.com',
  messagingSenderId: '722584124496',
  appId: '1:722584124496:web:0cd63fd82f970714396555',
};

const app = initializeApp(firebaseConfig);

// Referensi ke Firebase Storage
const storage = getStorage(app);

export default storage;
