import React from 'react';
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
const Share = () => {
    return (
        <div className='share'>
            <div className='shareWrapper'>
       <div className='sharetop'>
        <img src='https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg' alt='' className='shareProfileImg'></img>
        <input placeholder='whats in your mind' className='shareInput'></input>
       </div>
       <hr className='shareHr'/>
       <div className='shareBottom'>
          <div className='shareOptions'>
            <div className='shareOption'>
            <PermMedia htmlColor='tomato' className='shareIcon'/>
            <span className='shareOptionText'>Photo or video</span>
            </div>
          </div>
          <div className='shareOptions'>
            <div className='shareOption'>
            <Label htmlColor='blue' className='shareIcon'/>
            <span className='shareOptionText'>Tag</span>
            </div>
          </div>
          <div className='shareOptions'>
            <div className='shareOption'>
            <Room htmlColor='green' className='shareIcon'/>
            <span className='shareOptionText'>Location</span>
            </div>
          </div>
          <div className='shareOptions'>
            <div className='shareOption'>
            <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
            <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
       </div>
            </div>
        </div>
    );
};

export default Share;