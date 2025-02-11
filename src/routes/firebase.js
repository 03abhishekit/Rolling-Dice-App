import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhhyblXyMMJEkhaCwM8WapRNvzzNFD7Zg",
  authDomain: "create-demo-5f054.firebaseapp.com",
  projectId: "create-demo-5f054",
  storageBucket: "create-demo-5f054.appspot.com",
  messagingSenderId: "171527853756",
  appId: "1:171527853756:web:7056d6c6882d053c6a22b9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
