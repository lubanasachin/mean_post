var chai = require('chai');
var chaiHttp = require('chai-http');
var index = require('../app');
var should = chai.should();
var appServer = "http://localhost:3000";

chai.use(chaiHttp);

describe('Posts API', () => {

	describe('/GET get all posts', () => {
		it('it should get all the posts created', (done) => {
            chai.request(appServer)
            .get('/api/posts')
            .send()
            .end((err, res) => {
                res.should.have.status(200);
				res.body.should.be.a('array');
                done();
            });
		});
	});

    describe('/POST add new posts', () => {
        it('it should add new posts', (done) => {
            chai.request(appServer)
            .post('/api/posts')
            .send({description:'test posts'})
            .end((err, res) => {
				console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });

    describe('/PUT upvote a given post', () => {
        it('it should upvote a given post', (done) => {
            chai.request(appServer)
            .put('/api/posts/upvote')
            .send({id: '5a0812dddf8a910a81ba39ef'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/PUT downvote a given post', () => {
        it('it should downvote a given post', (done) => {
            chai.request(appServer)
            .put('/api/posts/downvote')
            .send({id: '5a0812dddf8a910a81ba39ef'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

});

