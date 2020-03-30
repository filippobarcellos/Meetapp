import Meetup from '../models/Meetup';

class MeetupController {
  async store(req, res) {
    const { title, description, location, date } = req.body;

    const meetup = await Meetup.create({
      user_id: req.userId,
      title,
      description,
      location,
      date,
    });

    return res.json(meetup);
  }

  async index(req, res) {
    const meetups = await Meetup.find().populate('user_id', ['name', 'email']);
    return res.json(meetups);
  }
}

export default new MeetupController();
