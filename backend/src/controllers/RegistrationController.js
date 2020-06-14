import { isBefore } from 'date-fns';

import User from '../models/User';
import Meetup from '../models/Meetup';
import Registration from '../models/Registration';

module.exports = {
  async store(req, res) {
    try {
      const { meetup_id } = req.body;

      const meetup = await Meetup.findById(meetup_id);

      if (!meetup) {
        return res.status(400).json({ err: ' Meetup does not exist' });
      }

      if (meetup.owner.toString() === req.userId) {
        return res.status(400).json({ err: 'You are the owner of the Meetup' });
      }

      if (isBefore(meetup.date, new Date())) {
        return res.status(400).json({
          err: 'You can not enroll is meetups that already happenned',
        });
      }

      const registration = await Registration.findOne({
        user_id: req.userId,
        meetup: meetup_id,
      });

      if (registration) {
        return res
          .status(400)
          .json({ err: 'You are already enrolled on this Meetup' });
      }

      const enrolled = await Registration.create({
        user_id: req.userId,
        meetup_id,
      });

      return res.json(enrolled);
    } catch (err) {
      console.log(err.message);
    }
  },

  async index(req, res) {
    try {
      const registrations = await Registration.find({
        user_id: req.userId,
      }).populate('meetup_id');

      return res.json(registrations);
    } catch (err) {
      console.log(err.message);
    }
  },
};
