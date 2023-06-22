import React from 'react';
import './Homse.css'
import TopBar from '../../Component/TopBar/TopBar';
import SideBar from '../../Component/SideBar/SideBar';
import Feed from '../../Component/Feed/Feed';
import Rightbar from '../../Component/RightBar/Rightbar';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <div className='homeContainer'>
            <SideBar></SideBar>
            <Feed></Feed>
            <Rightbar></Rightbar>
            </div>
        </div>
    );
};

export default Home;