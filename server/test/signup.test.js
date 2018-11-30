const server = require('../server');
const request = require('supertest')(server);

let mockUser = {
    email: 'skpoxpolice@gmail.com',
    password: 'l0vet0uh0u',
    firstname: 'Siwakun',
    lastname: 'Kunsuk',
    address: '154/29',
    phone: '0907300709'
};

let newUser = {
    email: 'new@new.new',
    password: 'l0vet0uh0u',
    firstname: 'Siwakun',
    lastname: 'Kunsuk',
    address: '154/29',
    phone: '0907300709'
}


describe('POST /api/signup', () => {
    it('Should response already used', (done) => {
        request
            .post('/api/signup')
            .send(mockUser)
            .then( res => {
                expect(res.body).toHaveProperty('status');
                done();
            })
    });

    /* it('It should response successful regis', async (done) => {
        request(server)
            .post('/api/signup')
            .send(newUser)
            .then( res => {
                expect(res.body.status).toEqual("Successfully Registration")
                done();
            })
    }); */
})

