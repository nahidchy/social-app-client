import React from 'react';
import './SideBar.css'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilled, RssFeed, School, WorkOutline } from '@mui/icons-material';
const SideBar = () => {
    return (
        <div className='sideBar'>
           <div className='sidebarWrapper'>
           <ul className='sidebarList'>
                <li className='sidebarListitem'>
                    <RssFeed className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Feed</span>
                </li>
                <li className='sidebarListitem'>
                    <Chat className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Chat</span>
                </li>
                <li className='sidebarListitem'>
                    <PlayCircleFilled className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Video</span>
                </li>
                <li className='sidebarListitem'>
                    <Group className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Groups</span>
                </li>
                <li className='sidebarListitem'>
                    <Bookmark className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Bookmarks</span>
                </li>
                <li className='sidebarListitem'>
                    <HelpOutline className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Questions</span>
                </li>
                <li className='sidebarListitem'>
                    <WorkOutline className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Job</span>
                </li>
                <li className='sidebarListitem'>
                    <Event className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Events</span>
                </li>
                <li className='sidebarListitem'>
                    <School className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Courses</span>
                </li>
           </ul>
           <button className='sideBarButton'>Show More</button>
           <hr className='sidebarHr'/>
           <ul className='sidebarFriendList'>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
                <li className='SidebarFriend'>
                    <img className='sidebarFriendImage' src='https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=' alt=''></img>
                    <span className='sidebarFriendName'>Jane Doe</span>
                </li>
           </ul>
           </div>
        </div>
    );
};

export default SideBar;