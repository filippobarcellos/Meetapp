import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    try {
      const userExist = await User.findOne({ email });
      if (userExist) res.status(400).json({ error: 'User already exist' });

      const { name } = await User.create(req.body);

      return res.json({
        name,
        email,
      });
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  async update(req, res) {
    const { name, oldPassword, password } = req.body;

    try {
      const user = await User.findById(req.userId);

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      user.name = name;
      user.password = password;

      await user.save();

      return res.json({
        id: req.userId,
        name,
        email: user.email,
      });
    } catch (err) {
      return res.status(500).json({ error: 'Server token' });
    }
  }
}

export default new UserController();
