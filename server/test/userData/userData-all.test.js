const server = require('../../server');
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

describe('GET /api/userData/load', () => {
    var auth = {};
    beforeAll(loginUser(auth));

    it('Should response all user data', (done) => {
        request
            .get('/api/userData/load')
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Load User Data');
                expect(res.body.data).toHaveProperty('email');
                done();
            });
    })
})

describe('POST /api/userData/edit', () => {
    var auth = {};
    beforeAll(loginUser(auth));

    it('Should response data successfully edit', (done) => {
        request
            .post('/api/userData/edit')
            .field('firstname', 'Kunsuk')
            .field('lastname', 'Siwakun')
            .field('address', '29/154')
            .field('phone', '0877172990')
            .attach('profileImage', 'server/test/testImage/user_profile.jpg')
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Edited');
                done();
            });
    })
})