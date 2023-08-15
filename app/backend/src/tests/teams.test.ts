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
  it('should return all teams', async function() {
    sinon.stub(ModelTeams ,'findAll').resolves(Teams as ModelTeams[]);

    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(Teams);
  });

});
