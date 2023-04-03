import {
    signInWithGooglePopUp,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up/sign-up.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>

            <SignUpForm />
        </div>
    )
}

export default SignIn;