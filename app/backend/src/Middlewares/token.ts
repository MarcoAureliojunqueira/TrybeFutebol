// src/utils/jwt.util.ts

import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = process.env.JWT_SECRET || 'jwt_secret';
const jwtConfig: jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function tokenCreate(payload: jwt.JwtPayload): string {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
}

function verifyToken(req: Request, res: Response, next:NextFunction) {
  try {
    const token = req.headers.authorization;
    const erro = 'Token not found';
    if (!token) {
      return res.status(401).json({ message: erro });
    }
    const data = token?.split('Bearer ');
    if (!data[1]) {
      return res.status(401).json({ message:
        'Token must be a valid token',
      });
    }
    const payload = jwt.verify(data[1], secret);
    res.locals.role = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token not found' });
  }
}

export default {
  tokenCreate,
  verifyToken,
};
