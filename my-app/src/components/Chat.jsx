import React from 'react';
import Cam from '../imgs/Cam.svg'
import More from '../imgs/More.svg'
import Add from '../imgs/Add.svg'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Name</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat