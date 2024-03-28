import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import '../assets/css/Nav.css'
function Nav() {
  let activeClassname = 'link';
  return (
<>
<nav className='manu'>
    <div className='logo'>
      <img src="img/Logo_Stayhost_.png" alt="logo" />
    </div>
   <div className="manu-select">
    <NavLink to='/' className={({isActive}) => isActive ? activeClassname : undefined }> Dashboard </NavLink>
    <NavLink to='/Renter' className={({isActive}) => isActive ? activeClassname : undefined }> Renter Information </NavLink>
    <NavLink to='/Amergency' className={({isActive}) => isActive ? activeClassname : undefined }> Amergency </NavLink>
    <NavLink to='/Sevices' className={({isActive}) => isActive ? activeClassname : undefined }> Sevices </NavLink>
    <NavLink to='/Bills' className={({isActive}) => isActive ? activeClassname : undefined }> Bills </NavLink>
    <NavLink to='/Payment' className={({isActive}) => isActive ? activeClassname : undefined }> Payment </NavLink>
    <NavLink to='/Parcel' className={({isActive}) => isActive ? activeClassname : undefined }> Parcel Status </NavLink>
    <Link to='/Logout'> Logout </Link> 
   </div>
   </nav>
   <nav className="profile">
    <div className="img-profile">
    </div>
      <h3>OWNER</h3>
    <div className="p-icon1">
    <i class="bi bi-caret-down-fill"></i>
    </div>
   </nav>
</>
  )
}

export default Nav
