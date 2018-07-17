/**
 * Test for Teachers routes
 */

var expect  = require('chai').expect;
var request = require('supertest');
var app = require('../app');

describe('Teachers routes', function() {
	it('should list all teachers', function(done) {
		request(app)
			.get('/api/teachers')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});
	
	it('should create a teacher', function(done) {
		request(app)
			.post('/api/teachers')
			.send({ email: 'test-teacher@.gmail.com' })
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});
	
	it('should delete a teacher', function(done) {
		request(app)
			.delete('/api/teachers')
			.send({ email: 'test-teacher@.gmail.com' })
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});
});