const server = require('../server');
const request = require('supertest')(server);

let trueUser = {
    email: 'skpoxpolice@gmail.com',
    password: 'l0vet0uh0u'
};

let falseUser = {
    email: 'skpoxpolice@gmail.com',
    password: '12345'
};

let wildUser = {
    email: '12345',
    password: '12345'
}

describe('GET /api/login', () => {
    it('Should response Login status and Token', (done) => {
        request
            .post('/api/login')
            .send(trueUser)
            .then( res => {
                expect(res.body).toHaveProperty('status', "Successful login");
                expect(res.body).toHaveProperty('token');
                done();
            })
    });

    it('Should response Login staus with not match password', (done) => {
        request
            .post('/api/login')
            .send(falseUser)
            .then( res => {
                expect(res.body).toHaveProperty('status', "User and Password are not matched");
                done();
            })
    });

    it('Should response Login staus with no user', (done) => {
        request
            .post('/api/login')
            .send(wildUser)
            .then( res => {
                expect(res.body).toHaveProperty('status', "User and Password are not matched");
                done();
            })
    });
})