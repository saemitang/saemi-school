/**
 * Test for Students routes
 */

var expect  = require('chai').expect;
var request = require('supertest');
var app = require('../app');

describe('Students routes', function() {
	it('should list all students', function(done) {
		request(app)
			.get('/students')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});
	
	it('should create a student', function(done) {
		request(app)
			.post('/students')
			.send({ email: 'test-student@.gmail.com' })
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});
	
	it('should delete a student', function(done) {
		request(app)
			.delete('/students')
			.send({ email: 'test-student@.gmail.com' })
			.set('Accept', 'application/json')
			.expect(200)
			.end(done);
	});
});