import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { chamadaMatches } from '../tests/mock.test';

import { Response } from 'superagent';
import ModelMatches from '../database/models/matches';
import { Router } from 'express';
import matches from '../Interfaces/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste Matches', () => {
  it('get Matches', async function() {
    sinon.stub(ModelMatches ,'findAll').resolves(chamadaMatches as any);

    const { status, body } = await chai.request(app).get('/matches');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(chamadaMatches);
  });
  it(' getById Matches', async function() {
    sinon.stub(ModelMatches ,'findByPk').resolves(Teams as any);

    const { status, body } = await chai.request(app).get('/teams/1');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(Teams);
  });



});
