// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 * Konfigurasi Firebase untuk aplikasi.
 * Variabel konfigurasi diambil dari environment variables untuk keamanan.
 */
const firebaseConfig = {
  apiKey: process.env.APP_FIREBASE_API_KEY,
  authDomain: 'smokeless-web.firebaseapp.com',
  databaseURL: 'https://smokeless-web-default-rtdb.firebaseio.com',
  projectId: 'smokeless-web',
  storageBucket: 'smokeless-web.appspot.com',
  messagingSenderId: '722584124496',
  appId: '1:722584124496:web:0cd63fd82f970714396555',
};

/**
 * Menginisialisasi aplikasi Firebase dengan konfigurasi yang diberikan.
 * @returns {FirebaseApp} Instance dari aplikasi Firebase.
 */
const app = initializeApp(firebaseConfig);

/**
 * Mendapatkan instance dari Firebase Storage.
 * @param {FirebaseApp} app - Instance dari aplikasi Firebase.
 * @returns {FirebaseStorage} Instance dari Firebase Storage.
 */
const storage = getStorage(app);

export default storage;
