const server = require('../server');
const request = require('supertest')(server);

// Mock User
let logIn = {
    email: 'skpoxpolice@gmail.com',
    password: 'l0vet0uh0u'
}

// Login Function to get Token
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

describe('POST /api/order/load', () => {
    var auth = {};
    beforeAll(loginUser(auth));

    it('Should response no order found', (done) => {
        request
            .get('/api/order/load')
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Not Found Any orders');
                done();
            })
    })
})

// Mock Prodcut
let product1 = {
    productID: '5bdf2a74a695670004fe66c0',
    amount: 2
}

let product2 = {
    productID: '5bdf2a9ea695670004fe66c1',
    amount: 1
}

let productList = {
    product: [product1, product2]
}

describe('POST /api/order/add', () => {
    var auth = {};
    beforeAll(loginUser(auth));

    it('Should response create new order', (done) => {
        request
            .post('/api/order/add')
            .send(product1)
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Created Order');
                done();
            })
    })

    it('Should response add the product amount', (done) => {
        request
            .post('/api/order/add')
            .send(product1)
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Added Amount');
                done();
            })
    })

    it('Should response add new product to order', (done) => {
        request
            .post('/api/order/add')
            .send(product2)
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Added to Order');
                done();
            })
    })
})

describe('POST /api/order/update', () => {
    var auth = {};
    beforeAll(loginUser(auth));
    it('Should response updated amount', (done) => {
        request
            .post('/api/order/update')
            .send(productList)
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Updated Amount of Product in Order');
                done();
            })
    })
})


describe('POST /api/order/remove/one', () => {
    var auth = {};
    beforeAll(loginUser(auth));
    it('Should response successfully remove product', (done) => {
        request
            .post('/api/order/remove/one')
            .send(product1)
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Removed Product');
                done();
            })
    })
})

describe('POST /api/order/remove/all', () => {
    var auth = {};
    beforeAll(loginUser(auth));
    it('Should response successfully remove order', (done) => {
        request
            .get('/api/order/remove/all')
            .set('Authorization', auth.token)
            .then( res => {
                expect(res.statusCode).toBe(200);
                // expect(res.type).toBe('application/json');
                expect(res.body).toHaveProperty('status', 'Successfully Removed Order');
                done();
            })
    })
})