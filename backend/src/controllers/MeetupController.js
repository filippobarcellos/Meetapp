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

  async show(req, res) {
    try {
      const meetupId = req.params.id;

      const meetup = await Meetup.findById(meetupId);

      if (!meetup) {
        return res.status(400).json({ error: 'Meetup was not found' });
      }

      if (meetup.owner.toString() !== req.userId) {
        return res
          .status(401)
          .json({ error: 'You can only see meetups that you are the owner' });
      }

      return res.json(meetup);
    } catch (err) {
      console.log(err.message);
    }
  },

  async update(req, res) {
    try {
      const meetupId = req.params.id;
      const { title, description, date, location } = req.body;
      const { filename } = req.file;

      const meetup = await Meetup.findById(meetupId);

      if (!meetup) {
        return res.status(400).json({ error: 'Meetup was not found' });
      }

      if (meetup.owner.toString() !== req.userId) {
        return res
          .status(401)
          .json({ error: 'You can only edit meetup that you are the owner' });
      }

      const dateParsed = parseISO(date);

      // check if the user is trying to create a meetup with past date
      if (isBefore(dateParsed, new Date())) {
        return res.status(400).json({ error: 'Past dates are not permitted' });
      }

      meetup.title = title;
      meetup.description = description;
      meetup.location = location;
      meetup.date = date;

      if (meetup && req.file) {
        const meetupBannerPath = path.join(
          uploadConfig.directory,
          meetup.banner
        );
        const meetupHasBanner = await fs.promises.stat(meetupBannerPath);
        meetupHasBanner ? await fs.promises.unlink(meetupBannerPath) : null;
      }

      meetup.image = filename;

      await meetup.save();

      return res.json(meetup);
    } catch (err) {
      console.log(err.message);
    }
  },
};
