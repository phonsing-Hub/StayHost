const db = require('../db/index'); 

const getBookingsWithRooms = async (req, res) => {
    try {
      const bookingsWithRooms = await db('Rooms')
            .select('RoomNumber', 'RoomType', 'RoomStatus', 'Price');
      res.json(bookingsWithRooms);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = {
    getBookingsWithRooms
};