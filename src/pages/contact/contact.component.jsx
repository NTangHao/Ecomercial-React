import React, {useEffect} from 'react';
import {auth} from "../../firebase/firebase";
import {useAuth} from "../../context/AuthContext";

const Contact = () => {
    const {isLogin,setIsLogin} = useAuth();
    const {logout} = useAuth();



    const handleSignOut = async () => {

        try {
            const isLogOut = await logout();
            setIsLogin(false)
            console.log('Log out thành công');
        }
        catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div>
            {isLogin? 'đã đăng nhập' : 'chưa đăng nhập'}
            <button onClick={handleSignOut}>Log out</button>
        </div>
    );
};

export default Contact;
