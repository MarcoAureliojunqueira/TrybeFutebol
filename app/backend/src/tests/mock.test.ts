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
const chamadaMatches = [{
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": 0,
      "homeTeam": {
        "teamName": "São Paulo"
      },
    }]


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
const valorMacthes = [{
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: 0,
  homeTeam: {
    teamName: 'São Paulo'
  },
  awayTeam: {
    teamName: 'Grêmio'
  }
},
{
  id: 2,
  homeTeamId: 9,
  homeTeamGoals: 1,
  awayTeamId: 14,
  awayTeamGoals: 1,
  inProgress: 0,
  homeTeam: {
    teamName: 'Internacional'
  },
  awayTeam: {
    teamName: 'Santos'
  }
}]

const notExistingUserBody = { email: 'notfoundemail.com', password: validPassword };
const valorLeaderBord = [
      {
        name: 'Santos',
        totalPoints: 9,
        totalGames: 3,
        totalVictories: 3,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 9,
        goalsOwn: 3,
        goalsBalance: 6,
        efficiency: 100
      },
      {
        name: 'Palmeiras',
        totalPoints: 7,
        totalGames: 3,
        totalVictories: 2,
        totalDraws: 1,
        totalLosses: 0,
        goalsFavor: 10,
        goalsOwn: 5,
        goalsBalance: 5,
        efficiency: 77.78
      },
      {
        name: 'Corinthians',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 6,
        goalsOwn: 1,
        goalsBalance: 5,
        efficiency: 100
      },
      {
        name: 'Grêmio',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 4,
        goalsOwn: 1,
        goalsBalance: 3,
        efficiency: 100
      },
      {
        name: 'Real Brasília',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 2,
        goalsOwn: 0,
        goalsBalance: 2,
        efficiency: 100
      },
      {
        name: 'São Paulo',
        totalPoints: 4,
        totalGames: 2,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 0,
        goalsFavor: 4,
        goalsOwn: 1,
        goalsBalance: 3,
        efficiency: 66.67
      }
]


  

export {

  Teams,
  noEmailLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  CreateUser,
  Token,
  usuarioCriado,
  chamadaMatches,
  valorLeaderBord,
  valorMacthes
};