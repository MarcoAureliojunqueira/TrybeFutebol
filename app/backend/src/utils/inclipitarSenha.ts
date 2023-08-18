import * as bcrypt from 'bcryptjs';

class inclipitarFuncoes {
  static inclipitar = (password: string): string => {
    const salt = bcrypt.genSaltSync(8);
    const senhaInclipitada = bcrypt.hashSync(password, salt);
    return senhaInclipitada;
  };

  static checarSenha = (password: string, passwordInclipitado: string) => {
    const senhaCorreta = bcrypt.compareSync(password, passwordInclipitado);
    if (senhaCorreta === false) { throw new Error('password invalido'); }
  };
}

export default inclipitarFuncoes;
