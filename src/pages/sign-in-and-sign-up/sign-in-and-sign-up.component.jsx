import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {
    return (

            <div className="sign-in-and-sign-up">
               <SignIn/>
               <Signup/>
            </div>

    );
};

export default SignInAndSignUp;
