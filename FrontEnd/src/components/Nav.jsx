import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/css/Nav.css'
function Nav() {
  let activeClassname = 'linkactive';
  let navlink = 'navlink';
  return (
    <>
      <nav class="navbar fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#"> StayHost</a>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="sty-img">
              <img src="img/Logo_Stayhost_.png" alt="logo-sty" />
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <NavLink to='/' className={({ isActive }) => isActive ? activeClassname : navlink}> <i class="bi bi-columns-gap"></i> Dashboard </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to='/Renter' className={({ isActive }) => isActive ? activeClassname : navlink}> <i class="bi bi-person-video2"></i> Renter Information </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to='/Amergency' className={({ isActive }) => isActive ? activeClassname : navlink}> <i class="bi bi-diagram-3"></i> Amergency </NavLink>
                </li>
                <li class="nav-item">

                  <NavLink to='/Sevices' className={({ isActive }) => isActive ? activeClassname : navlink}> <i class="bi bi-sliders"></i> Sevices</NavLink>
                </li>
                <li class="nav-item">

                  <NavLink to='/Bills' className={({ isActive }) => isActive ? activeClassname : navlink}><i class="bi bi-cash-stack"></i> Bills </NavLink>
                </li>
                <li class="nav-item">

                  <NavLink to='/Payment' className={({ isActive }) => isActive ? activeClassname : navlink}><i class="bi bi-credit-card-2-front"></i> Payment </NavLink>
                </li>
                <li class="nav-item">

                  <NavLink to='/Parcel' className={({ isActive }) => isActive ? activeClassname : navlink}> <i class="bi bi-box-seam-fill"></i> Parcel </NavLink>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle af" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    Other
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to='/ChangePassword' className='navlink'><i class="bi bi-key"></i> Change Password </Link></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><Link to='/Logout' className='navlink'><i class="bi bi-box-arrow-left"></i> Logout </Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
