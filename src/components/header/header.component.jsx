import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import {useAuth} from "../../context/AuthContext";

const Header = () => {
    const {isLogin,setIsLogin} = useAuth();
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>

                {
                    isLogin ? (
                        <Link className='option' to='/'>
                            SIGN OUT
                        </Link>
                    ) : (
                        <Link className='option' to='/sign-in-and-sign-up'>
                            SIGN IN
                        </Link>
                    )
                }


            </div>
        </div>
    );

};

export default Header;
