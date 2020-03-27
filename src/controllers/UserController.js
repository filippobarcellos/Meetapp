import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ error: 'User already exist' });

    const { _id, name } = await User.create(req.body);

    return res.json({
      _id,
      name,
      email,
    });
  }

  async update(req, res) {
    const { name, oldPassword, password } = req.body;

    const user = await User.findById(req.userId);

    if (oldPassword && !(await user.checkPasword(oldPassword)))
      return res.status(401).json({ error: 'Password does not match' });

    user.name = name;
    user.password = password;
    await user.save();

    return res.json({
      id: req.userId,
      name,
    });
  }
}

export default new UserController();
