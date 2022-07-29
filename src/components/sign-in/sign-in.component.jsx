import React, {useState} from 'react';
import FormInput from "../inputComponent/FormInput";
import './sign-in.style.scss'
import CustomButton from "../inputComponent/CustomButton";
import {useAuth} from "../../context/AuthContext";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let {sign_in} = useAuth();
    const {isLogin, setIsLogin} = useAuth();
    const {signInWithGoogle} = useAuth();
    let navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithGoogle();
            console.log(user)
            setIsLogin(true);
            toast.success('Đăng nhập thành công', {autoClose: 2000});
            navigate("/", { replace: true });
        }
        catch (error) {
            console.log(error.message);
            toast.error(`Đăng nhập thất bại :${error.message}`, {autoClose: 2000});
        }


    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await sign_in(email, password);
            const info = await userCredential.email;
            console.log('đăng nhập bằng email:',info);
            setIsLogin(true);
            toast.success('Đăng nhập thành công', {autoClose: 2000});

        } catch (error) {
            console.log(error.message);
            toast.error(`Đăng nhập thất bại :${error.message}`, {autoClose: 2000});
        }


        setEmail('');
        setPassword('');
    }
    return (
        <div className='sign-in'>
            <h1>I already have account</h1>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={(e) => setPassword(e.target.value)}
                    label='password'
                    value={password}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick ={handleGoogleSignIn}  isGoogleSignIn={true}>


                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
