import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { valorMacthes } from '../tests/mock.test';

import { Response } from 'superagent';
import ModelMatches from '../database/models/matches';
import { Router } from 'express';
import matches from '../Interfaces/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste Matches', () => {
  it('return all Login', async function() {
   
       const t= await chai.request(app).get('/matches');
       
       expect(t.status).to.equal(200);
     //  expect(t.body).to.deep.equal(valorLeaderBord);
     })
     it('return all matchesId', async function() {
   
      const t= await chai.request(app).patch('/matches/:id');
      
      expect(t.status).to.equal(200);
    //  expect(t.body).to.deep.equal(valorLeaderBord);
    })
    it('return all matchesId se der Errado', async function() {
   
      const t= await chai.request(app).patch('/matches/:id');
      
      expect(t.status).to.equal(401);
    //  expect(t.body).to.deep.equal(valorLeaderBord);
    })


    it('return all matchesId/finish', async function() {
   
      const t= await chai.request(app).patch('/matches/:id/finish');
      
      expect(t.status).to.equal(200);
    //  expect(t.body).to.deep.equal(valorLeaderBord);
    })
    it('return all matchesId/finish se der Errado', async function() {
   
      const t= await chai.request(app).patch('/matches/:id');
      
      expect(t.status).to.equal(401);
    //  expect(t.body).to.deep.equal(valorLeaderBord);
    })


afterEach(sinon.restore);
 });
