// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ3FrpmL2Cfu8AQokN4xy6FKv4RgW962c",
  authDomain: "hospital-website-41a3f.firebaseapp.com",
  projectId: "hospital-website-41a3f",
  storageBucket: "hospital-website-41a3f.appspot.com",
  messagingSenderId: "553360894782",
  appId: "1:553360894782:web:ce30c554ddb59fdd605a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;