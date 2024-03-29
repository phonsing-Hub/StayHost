const db = require('../db/index'); 

const getBookingsWithRooms = async (req, res) => {
    try {
      const bookingsWithRooms = await db('Bookings')
                                  .select('Bookings.*', 'Rooms.*')
                                  .join('Rooms', 'Bookings.RoomID', '=', 'Rooms.RoomID');
      res.json(bookingsWithRooms);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = {
    getBookingsWithRooms
};