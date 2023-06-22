import React from 'react';
import './TopBar.css';
import { Search,Person,Chat,Notifications } from '@mui/icons-material';
const TopBar = () => {
    return (
        <div className='topBar-container'>
           <div className='topBarLeft'>
            <span className='Logo'>Nahid Social</span>
           </div>
           <div className='topBarCenter'>
              <div className='searchBar'>
                    <Search className='searchIcon'/>
                    <input placeholder='Search for friend,post or video' className='searchInput'></input>
              </div>
           </div>
           <div className='topBarRight'>
            <div className='topBarLinks'>
                <span className='topBarLink'>Home Page</span>
                <span className='topBarLink'>Timeline</span>
            </div>
            <div className='topBarIcons'>
                   <div className='topBarIconItem'>
                    <Person/>
                    <span className='topBarIconBadge'>1</span>
                   </div>
                   <div className='topBarIconItem'>
                    <Chat/>
                    <span className='topBarIconBadge'>2</span>
                   </div>
                   <div className='topBarIconItem'>
                    <Notifications/>
                    <span className='topBarIconBadge'>3</span>
                   </div>
            </div>
            <img src='https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='' className='topBarImage'></img>
           </div>
        </div>
    );
};

export default TopBar;