/**
 * Test for School routes
 */

var expect  = require('chai').expect;
var request = require('supertest');
var app = require('../app');

describe('School routes', function() {
	it('should register', function(done) {
		request(app)
			.post('/register')
			.send({
				"teacher": "teacherken@gmail.com",
				"students": ["studentjon@example.com", "studenthon@example.com"]
			})
			.expect(204, done);
	});
	
	it('should get a list of common students', function(done) {
		request(app)
			.get('/commonstudents?teacher=teacherken@example.com')
			.expect('Content-Type', /json/)
			.expect(function(res) {
				if (res.statusCode != 200) {
					throw new Error("status code");
				}
				
				if (!('students' in res.body)) {
					throw new Error("missing students key");
				}
			})
			.end(done);
	});
	
	it('should suspend a student', function(done) {
		request(app)
			.post('/suspend')
			.send({ "student": "studentjon@example.com" })
			.set('Accept', 'application/json')
			.expect(204)
			.end(done);
	});
	
	it('should get a list of receipients of notification', function(done) {
		request(app)
			.post('/retrievefornotifications')
			.send({
				"teacher": "teacherken@gmail.com",
				"notification": "Hello students! @studentagnes@example.com @studentmiche@example.com"
			})
			.set('Accept', 'application/json')
			.expect(function(res) {
				if (res.statusCode != 200) {
					throw new Error("status code");
				}
				
				if (!('recipients' in res.body)) {
					throw new Error("missing recipients key");
				}
			})
			.end(done);
	});
});