import {React} from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import '../../public/css/Nav.css'

function Nav() {
  let activeClassname = 'linkactive';
  let navlink = 'navlink';

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('Admin');
    navigate('/Login');
  };
  
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="over">
            <label htmlFor="">User Admin</label>
            <img src="img/user.png" alt="overuser" />
          </div>
          <div className="offcanvas offcanvas-start" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="sty-img">
              <img src="img/Logo_Stayhost_.png" alt="logo-sty" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to='/' className={({ isActive }) => isActive ? activeClassname : navlink}> <i className="bi bi-columns-gap"></i> Dashboard </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Renter' className={({ isActive }) => isActive ? activeClassname : navlink}> <i className="bi bi-person-video2"></i> Renter Information </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/Rooms' className={({ isActive }) => isActive ? activeClassname : navlink}> <i className="bi bi-diagram-3"></i> Rooms </NavLink>
                </li>
                <li className="nav-item">

                  <NavLink to='/Sevices' className={({ isActive }) => isActive ? activeClassname : navlink}> <i className="bi bi-sliders"></i> Sevices</NavLink>
                </li>
                <li className="nav-item">

                  <NavLink to='/Bills' className={({ isActive }) => isActive ? activeClassname : navlink}><i className="bi bi-cash-stack"></i> Bills </NavLink>
                </li>
                <li className="nav-item">

                  <NavLink to='/Payment' className={({ isActive }) => isActive ? activeClassname : navlink}><i className="bi bi-credit-card-2-front"></i> Payment </NavLink>
                </li>
                <li className="nav-item">

                  <NavLink to='/Parcel' className={({ isActive }) => isActive ? activeClassname : navlink}> <i className="bi bi-box-seam-fill"></i> Parcel </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle af" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    Other
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to='/ChangePassword' className='navlink'><i className="bi bi-key"></i> Change Password </Link></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className='navlink' ><button type="button" class="btn btn-info" onClick={handleClick}>Logout</button></li>
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
