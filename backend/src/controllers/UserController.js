import User from '../models/User';

module.exports = {
  async store(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
      return res.status(400).json({ error: 'User already exist' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  },

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findById(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { name } = await user.updateOne(req.body);
    return res.json({
      name,
      email,
    });
  },
};
