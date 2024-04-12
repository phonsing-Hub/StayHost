import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../controllers/Nav';
import '../../public/css/Renter.css'
import { Formuserinsert, Formuserupdate, Formuserdelete } from '../controllers/Formuser';

function Renter() {
  const [bookings, setBookings] = useState([]);
  const [showForminsert, setShowForminsert] = useState(false);
  const [showFormupdate, setShowFormupdate] = useState(false);
  const [showFormdelete, setShowFormdelete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggleForminsert = () => {
    setShowForminsert(!showForminsert); 
  }

  const closehandleToggleForminsert = () => {
    setShowForminsert(!showForminsert);
  }

  const handleToggleFormupdate = () => {
    setShowFormupdate(!showFormupdate); 
  }

  const closehandleToggleFormupdate = () => {
    setShowFormupdate(!showFormupdate);
  }

  const handleToggleFormdelete = () => {
    setShowFormdelete(!showFormdelete); 
  }

  const closehandleToggleFormdelete = () => {
    setShowFormdelete(!showFormdelete);
  }

  return (
    <>
      <Nav />
      <div className="contenner">
        <div className="title">
          <h1>Renter Information</h1>
        </div>
        <div className="manu">
          <div className="sha">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
         <div className="btt">
          <button type="button" className="btn btn-primary" onClick={handleToggleForminsert}>Add+</button>
          <button type="button" class="btn btn-warning" onClick={handleToggleFormupdate}>Update</button>
          <button type="button" class="btn btn-danger" onClick={handleToggleFormdelete}>Delete</button>
         </div>
        </div>
        {showForminsert && <Formuserinsert  closehandleToggleForminsert={closehandleToggleForminsert} />}
        {showFormupdate && <Formuserupdate  closehandleToggleFormupdate={closehandleToggleFormupdate} />}
        {showFormdelete && <Formuserdelete  closehandleToggleFormdelete={closehandleToggleFormdelete} />}

        <div className="tb">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col-8">RIDCard</th>
                <th scope="col-5">Firstname</th>
                <th scope="col-5">Lastname</th>
                <th scope="col-4">Birthdate</th>
                <th scope="col-1">Age</th>
                <th scope="col-1">Gender</th>
                <th scope="col-8">Address</th>
                <th scope="col-8">PhoneNumber</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(user => (
                <tr key={user.IDCard}>
                  <td>{user.IDCard}</td>
                  <td>{user.Firstname}</td>
                  <td>{user.Lastname}</td>
                  <td>{new Date(user.Birthdate).toLocaleDateString()}</td>
                  <td>{user.Age}</td>
                  <td>{user.Gender}</td>
                  <td>{user.Address}</td>
                  <td>{user.PhoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Renter
