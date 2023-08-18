import { Response, Request, NextFunction } from 'express';

const validSenhaeEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const validacao = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  if (!validacao.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

export default validSenhaeEmail;
