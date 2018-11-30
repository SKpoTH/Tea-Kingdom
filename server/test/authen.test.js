const server = require('../server');
const request = require('supertest')(server);

let logIn = {
    email: 'skpoxpolice@gmail.com',
    password: 'l0vet0uh0u'
}

function loginUser(auth) {
    return function(done) {
        request
            .post('/api/login')
            .send(logIn)
            .then( res => {
                auth.token = res.body.token;
                done();
            })
    };
}

describe('GET /api/authen/load', () => {
    var auth = {};
    beforeAll(loginUser(auth))

    it('Should response all user data', (done) => {
        request
            .get('/api/authen/load')
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'logged in');
                expect(res.body).toHaveProperty('email');
                expect(res.body).toHaveProperty('firstname');
                expect(res.body).toHaveProperty('profileImage');
                expect(res.body).toHaveProperty('chart');
                expect(res.body).toHaveProperty('type');
                done();
            });
    })
})
