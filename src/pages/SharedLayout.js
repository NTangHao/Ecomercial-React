import React from 'react';
import Navbar from "../components/nav/Navbar";
import {Outlet} from "react-router-dom";
import Header from "../components/header/header.component";

const SharedLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default SharedLayout;
