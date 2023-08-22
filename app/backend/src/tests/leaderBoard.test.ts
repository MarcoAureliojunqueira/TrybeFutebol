import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { valorLeaderBord } from "./mock.test";
import ModelMatches from '../database/models/matches';
import { leaderboardHome } from '../Interfaces/matches';
chai.use(chaiHttp);
const { expect } = chai;
 describe('LeaderBoard ', function () { 
   
 it('should return all LeaderboardHome', async function() {
   // sinon.stub(ModelMatches, 'findAll')
   // .resolves(valorLeaderBord as []);
      const t= await chai.request(app).get('/leaderboard/home');
      
      expect(t.status).to.equal(200);
    //  expect(t.body).to.deep.equal(valorLeaderBord);
    })
    it('should return all LeaderboardAway', async function() {
      // sinon.stub(ModelMatches, 'findAll')
      // .resolves(valorLeaderBord as []);
         const t= await chai.request(app).get('/leaderboard/away');
         
         expect(t.status).to.equal(200);
       //  expect(t.body).to.deep.equal(valorLeaderBord);
       })
       it('should return all LeaderboardTodos os Times', async function() {
        // sinon.stub(ModelMatches, 'findAll')
        // .resolves(valorLeaderBord as []);
           const t= await chai.request(app).get('/leaderboard');
           
           expect(t.status).to.equal(200);
         //  expect(t.body).to.deep.equal(valorLeaderBord);
         })
     
  
  afterEach(sinon.restore);
  
   
 });