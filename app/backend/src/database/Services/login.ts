import * as bcrypt from 'bcryptjs';
import { newILogin } from '../../Interfaces/login';
import ModelUser from '../models/users';
import createToken from '../../utils/create.token';

async function Loginpost(login: newILogin) {
  const usuario = await ModelUser.findOne({ where: { email: login.email } });

  if (!usuario || !usuario.dataValues.password) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const senha = bcrypt.compareSync(
    login.password,
    usuario.password,
  );

  if (!senha) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const { role, username } = usuario;
  const Token = createToken({ role, username });

  return { status: 200, message: Token };
}
export default Loginpost;
