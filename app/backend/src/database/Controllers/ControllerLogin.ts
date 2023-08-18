import { Request, Response } from 'express';
import Loginpost from '../Services/login';

async function login(req: Request, res: Response):Promise<void> {
  const { email, password } = req.body;
  const usuario = await Loginpost({ email, password });

  if (usuario.status === 200) {
    res.status(usuario.status).json({ token: usuario.message });
  } else {
    res.status(usuario.status).json({ message: usuario.message });
  }
}

export default login;
