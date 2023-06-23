import React, { useEffect, useState } from 'react';
import './Post.css'
import { MoreVert } from '@mui/icons-material';
const Post = ({post}) => {
    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className='postTopLeft'>
                     <img className='postImage' src={post.photo} alt=''></img>
                     <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                  <MoreVert/>
                    </div>
                </div>
                <div className='post-center'>
                    <div className='postText'>
                        <span>{post?.desc}</span>
                        <img className='postImage2' src={post.photo} alt=''></img>
                    </div>
                </div>
                <div className='post-bottom'>
                    <div className='postBottomLeft'>
                       <img className='likeIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvW4l6nxesp7HRT4x_wTNhztELLssha674lg&usqp=CAU' alt=''></img>
                       <img className='loveIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHTQy_69cLRaRResuSstqXAh-9zntSjWKWg&usqp=CAU' alt=''></img>
                       <span className='postLikeCounter'>{post.like} people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;