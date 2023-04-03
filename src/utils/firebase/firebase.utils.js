import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw8pz6bCa4iBFgeJLQfLdWXDZZdELW5A8",
    authDomain: "crwn-clothing-db-cfdb7.firebaseapp.com",
    projectId: "crwn-clothing-db-cfdb7",
    storageBucket: "crwn-clothing-db-cfdb7.appspot.com",
    messagingSenderId: "600916760229",
    appId: "1:600916760229:web:d2222212bb7f0c68515f4c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        console.log('snapshot does not exist');
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
            console.log('created user');
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }

    return userDocRef;
}