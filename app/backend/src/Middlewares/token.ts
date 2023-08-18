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

    if (!token) {
      return res.status(401).json({ message:
      'Token not found',
      });
    }
    // const tokenLivre = token?.split(' ')[1];

    jwt.verify(token, secret);

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

export default {
  tokenCreate,
  verifyToken,
};
