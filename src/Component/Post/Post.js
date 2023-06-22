import React from 'react';
import './Post.css'
import { MoreVert } from '@mui/icons-material';
const Post = () => {
    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className='postTopLeft'>
                     <img src='https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg' alt=''></img>
                     <span className='postUserName'>Bom chIk chIk sAku!</span>
                     <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                  <MoreVert/>
                    </div>
                </div>
                <div className='post-center'></div>
                <div className='post-bottom'></div>
            </div>
        </div>
    );
};

export default Post;