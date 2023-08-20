import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { CreateUser, usuarioCriado } from '../tests/mock.test';

import { Response } from 'superagent';
import { Router } from 'express';
import ModelUser from '../database/models/users';
import Loginpost from '../database/Services/login';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste Login', () => {
  it('Post Teams gerando Token', async function() {
   
    sinon.stub(ModelUser ,'findOne').resolves(CreateUser as ModelUser);
   const resposta = await chai.request(app).post('/login').send(usuarioCriado)

  
    expect(resposta.status).to.equal(200);
    expect(resposta.body).to.have.property('token');
  });
  sinon.restore();


});
