import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../assets/css/Renter.css';

function Renter() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:3000/rooms');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString();
    return formattedDate;
  };

  return (
    <>
      <Nav />
      <div className="Renter">
        <h1> Rooms </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Room ID</th>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
              <th>Booking Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.BookingID}>
                <td>{booking.BookingID}</td>
                <td>{booking.UserID}</td>
                <td>{booking.RoomID}</td>
                <td>{formatDate(booking.CheckInDate)}</td>
                <td>{formatDate(booking.CheckOutDate)}</td>
                <td>{formatDate(booking.BookingDate)}</td>
                <td>{booking.TotalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Renter;
