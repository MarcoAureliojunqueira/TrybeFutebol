import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Teams } from '../tests/mock.test';

import { Response } from 'superagent';
import ModelTeams from '../database/models/teams';
import { Router } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  it('get Teams', async function() {
    sinon.stub(ModelTeams ,'findAll').resolves(Teams as ModelTeams[]);

    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(Teams);
  });

  it(' getById Teams', async function() {
    sinon.stub(ModelTeams ,'findByPk').resolves(Teams as any);

    const { status, body } = await chai.request(app).get('/teams/1');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(Teams);
  });

});
