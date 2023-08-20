export default interface ILogin {
  id: number,
  email: string,
  password: string
  username:string
  role:string
}

export type newILogin = {
  email: string,
  password: string
};

export type loginUser = {
  username: string
  role:string
};
