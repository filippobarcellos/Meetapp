// exports.editMeetup = async function (req, res) {
// const { meetupId } = req.params;
// const { title, description, location, date } = req.body;

// const meetup = await Meetup.findById(meetupId);

// if (!meetup) {
// return res.status(400).json({ error: 'Meetup does not exist' });
// }

// if (meetup.owner.toString() !== req.userId) {
// return res
// .status(400)
// .json({ error: 'You can only edit meetup that you are the owner' });
// }

// // check if the user is trying to change a meetup with past date
// const parseDate = parseISO(date);
// if (isBefore(parseDate, new Date())) {
// return res.status(400).json({ error: 'Past dates are not permitted' });
// }

// meetup.title = title;
// meetup.description = description;
// meetup.location = location;
// meetup.date = parseDate;

// if (meetup && req.file) {
// const meetupBannerPath = path.join(uploadConfig.directory, meetup.banner);
// const meetupHasBanner = await fs.promises.stat(meetupBannerPath);
// meetupHasBanner ? await fs.promises.unlink(meetupBannerPath) : null;

// meetup.image = req.file.filename;
// }

// await meetup.save();

// return res.status(200).json(meetup);
// };

// exports.deleteMeetup = async function (req, res) {
// const { meetupId } = req.params;

// const meetup = await Meetup.findById(meetupId);

// if (!meetup) {
// return res.status(400).json({ error: 'Meetup not found' });
// }

// if (meetup.owner.toString() !== req.userId) {
// return res
// .status(400)
// .json({ error: 'You can only edit meetup that you are the owner' });
// }

// await meetup.remove();

// return res.json({ msg: 'Meetup was deleted' });
// };

// exports.getAllMeetups = async function (req, res) {
// const meetups = await Meetup.find();

// return res.json(meetups)
