const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', ()=> {
    describe('GET /', () => {
       it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            // .expect('Hello Java World.')
            // .expect({ error: 'Page Not Found'})
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page Not Found'
                });
            })
            .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return json array response', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Andrew',
                    age: 25
                });
            })
            .end(done);
        });
    });
});

it('should return user json object response', () => {
    request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '27')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
        expect((res) => {
           expect(res.body).toInclude({ name: 'sanngly', age: 38 });     
        });
    });
});


