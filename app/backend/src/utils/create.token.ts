import * as jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';
type Itoken = {
  role: string,
  username:string,
};
const jwtConfig :jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};
const createToken = (payload: Itoken): string => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

export default createToken;
