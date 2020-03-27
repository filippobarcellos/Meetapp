import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'User does not exist' });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: 'Password does not match' });

    const { _id, name } = user;

    return res.json({
      user: {
        _id,
        name,
      },
      token: jwt.sign({ _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
