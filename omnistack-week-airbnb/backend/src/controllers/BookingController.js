const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'Field user_id is required at header' })
    }

    try {
      const booking = await Booking.create({
        user: user_id,
        spot: spot_id,
        date
      });

      await booking.populate('spot')
        .populate('user')
        .execPopulate();

      const ownerSocket = req.connectedUsers[booking.spot.user];

      console.log(ownerSocket)

      if (ownerSocket) {
        req.io.to(ownerSocket).emit('booking_request', booking);
      }

      return res.json(booking);
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
}
