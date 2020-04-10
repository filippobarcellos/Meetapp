import Meetup from '../models/Meetup';
import { parseISO, isBefore } from 'date-fns';

exports.createMeetup = async function (req, res) {
  const { title, description, location, date } = req.body;
  const { filename } = req.file;

  // check if the user is trying to create a meetup with past date
  const dateParsed = parseISO(date);

  if (isBefore(dateParsed, new Date())) {
    return res.status(400).json({ error: 'Past dates are not permitted' });
  }

  const meetup = await Meetup.create({
    owner: req.userId,
    title,
    banner: filename,
    description,
    location,
    date,
  });

  return res.status(200).json(meetup);
};

exports.getMeetupById;
