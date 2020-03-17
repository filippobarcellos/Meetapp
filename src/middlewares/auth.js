import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) res.status(401).json({ error: 'Token was not provided' });

  const [, token] = authHeader.split(' ');

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) res.status(401).json({ error: 'Failed to authenticate token' });

      req.userId = decoded.id;
      return next();
    });
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
