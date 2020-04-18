import Meetup from '../models/Meetup';
import mongoose from 'mongoose';

exports.getMeetupsByUser = async function (req, res) {
  try {
    const meetups = await Meetup.find({ owner: req.userId });

    return res.json(meetups);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
