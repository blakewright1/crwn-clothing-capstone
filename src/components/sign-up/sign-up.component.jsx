import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component";

import './sign-up.styles.scss'

const defaultFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormValues);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormValues);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("ERROR passwords do not match");
            return;
        }

        try {
            // try to create user document
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            // create and add user document to database
            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user. Email already in use');
            }
            console.error('user creation failed', error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;