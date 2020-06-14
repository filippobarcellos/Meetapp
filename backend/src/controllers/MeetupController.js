import { parseISO, isBefore } from 'date-fns';
import path from 'path';
import fs from 'fs';

import Meetup from '../models/Meetup';

import uploadConfig from '../config/multer';

module.exports = {
  async store(req, res) {
    try {
      const { title, description, location, date } = req.body;
      const { filename } = req.file;

      const dateParsed = parseISO(date);

      // check if the user is trying to create a meetup with past date
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
    } catch (err) {
      console.log(err.message);
    }
  },
};
