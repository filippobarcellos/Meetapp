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

exports.editMeetup = async function (req, res) {
  const { meetupId } = req.params;
  const { title, description, location, date } = req.body;

  const meetup = await Meetup.findById(meetupId);

  if (!meetup) {
    return res.status(400).json({ error: 'Meetup does not exist' });
  }

  if (meetup.owner != req.userId) {
    return res
      .status(400)
      .json({ error: 'You can only edit meetup that you are the owner' });
  }

  // check if the user is trying to change a meetup with past date
  const parseDate = parseISO(date);
  if (isBefore(parseDate, new Date())) {
    return res.status(400).json({ error: 'Past dates are not permitted' });
  }

  meetup.title = title;
  meetup.description = description;
  meetup.location = location;
  meetup.date = parseDate;

  if (req.file) {
    meetup.image = req.file.filename;
  }

  await meetup.save();

  return res.status(200).json(meetup);
};
