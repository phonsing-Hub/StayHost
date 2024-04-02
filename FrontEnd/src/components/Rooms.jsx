import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../controllers/Nav'
import '../assets/css/Rooms.css'
function Rooms() {
  const [Rooms, setRooms] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/rooms');
        setRooms(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggleForm = () => {
    setShowForm(!showForm); // เมื่อคลิกปุ่ม Add+ ให้สลับค่าของ showForm
  }

  return (
    <>
      <Nav />
      <div className="contenner">
        <div className="title">
          <h1>Rooms Information</h1>
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
          <button type="button" className="btn btn-primary" onClick={handleToggleForm}>Add+</button>
        </div>
        <div className="tb">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">RoomNumber</th> 
                <th scope="col">RoomStatus</th>
                <th scope="col">Price</th>
                <th scope="col">RoomType</th>
              </tr>
            </thead>
            <tbody>
              {Rooms.map(Room => (
                <tr key={Room.RoomNumber}>
                  <td>{Room.RoomNumber}</td> 
                  <td>{Room.RoomStatus}</td>
                  <td>{Room.Price}</td>
                  <td>{Room.RoomType}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}

export default Rooms
