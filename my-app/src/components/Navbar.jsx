import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">TalkToMe</span>
      <div className='user'>
        <img src="https://i.pinimg.com/originals/d2/ea/d8/d2ead876ae76ba7147f68e7d2417c5f3.png" alt="" />
        <span>Name</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar