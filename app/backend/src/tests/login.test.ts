import * as sinon from 'sinon';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import ModelUser from '../database/models/users';
import token from '../Middlewares/token';
chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste Login', () => {
    it('return all Login', async function() {
      // sinon.stub(ModelMatches, 'findAll')
      // .resolves(valorLeaderBord as []);
         const t= await chai.request(app).post('/login');
         
         expect(t.status).to.equal(200);
       //  expect(t.body).to.deep.equal(valorLeaderBord);
       })
       it('return all Login', async function() {
        
           const t= await chai.request(app).get('/login/role');
           
           expect(t.status).to.equal(200);
         //  expect(t.body).to.deep.equal(valorLeaderBord);
         })
});
