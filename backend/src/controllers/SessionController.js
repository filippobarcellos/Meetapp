import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

import User from '../models/User';

module.exports = {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name } = user;

      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};
