import Meetup from '../models/Meetup';

module.exports = {
  async index(req, res) {
    try {
      const meetups = await Meetup.find({ owner: req.userId });

      if (!meetups) {
        return res.status(400).json({ err: 'There is no meetup listed' });
      }

      return res.json(meetups);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
