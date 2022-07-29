import React, {useState} from 'react';
import './sign-up.style.scss';
import FormInput from "../inputComponent/FormInput";
import CustomButton from "../inputComponent/CustomButton";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {useAuth} from "../../context/AuthContext";
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const { register } = useAuth(); /*Destructuring ra cho dễ kiểm soát*/

    /*cách 1: ko hay. làm kiểu này thì mỗi khi login hay register thì ta dều phải viết function.
    * Cách 2: đó chính là tạo ra 1 Context để có thể sử dụng tại bất kỳ thằng con nào
    * */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Your confirm password are wrong',{ autoClose: 2000 });

        } else {
            /* createUserWithEmailAndPassword(auth, email, password)
                 .then((userCredential) => {
                     // Signed in
                     const user = userCredential.user;
                     console.log('Registered with:', user.email);
                 })
                 .catch((error) => {
                     const errorCode = error.code;
                     const errorMessage = error.message;
                     alert(errorMessage);
                 });*/


          /*  try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const info = await userCredential.user;
                console.log('Registered with:', info.email);
                toast.success('Sign up success',{ autoClose: 2000 });
            }
            catch (error) {
                console.log(error.message);
                toast.error(error.message,{ autoClose: 2000 });
            }*/

            try {
                const userCredential = await register( email, password);
                const info = await userCredential.user;
                console.log('Registered with:', info.email);
                toast.success('Sign up success',{ autoClose: 2000 });
            }
            catch (error) {
                console.log(error.message);
                toast.error(error.message,{ autoClose: 2000 });
            }


        }


        setEmail('');
        setPassword('');
        setDisplayName('');
        setConfirmPassword('');
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={(e) => setDisplayName(e.target.value)}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={(e) => setConfirmPassword(e.target.value)}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>


        </div>
    );
};

export default Signup;

