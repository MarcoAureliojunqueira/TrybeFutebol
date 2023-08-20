// tests/mocks/Book.mocks.ts
const Teams = [{
  'id':1,
  'teamName' :'bahia',  
},
{
  'id':2,
  'teamName' :'Sao Paulo'
},
{
  'id':3,
  'teamName' :'Palmeiras'
}
];

const usuarioCriado = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}
const CreateUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'

};
const Token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNjkyMzg2ODQzLCJleHAiOjE2OTI5OTE2NDN9.uHhBBrRr1aLalRX4MJICfOZvIZI_nu6m4_74xLa5l9o'}

const validPassword = 'ch4ng3m3';
const noEmailLoginBody = { email: '', password: validPassword };


const validEmail = 'user1@email.com';
const noPasswordLoginBody = { email: validEmail, password: '' };


const notExistingUserBody = { email: 'notfound@email.com', password: validPassword };


export {

  Teams,
  noEmailLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  CreateUser,
  Token,
  usuarioCriado,
};