const { spawn } = require('child_process')
const request = require('request')

const env = Object.assign({}, process.env, {PORT: 5000})
const child = spawn('node', ['../server.js'], {env})

describe('Development server', () => {
	test('should respond', () => {
		child.stdout.on('data', () => {
			request('http://127.0.0.1:5000', (error, response, body) => {
				child.kill()
				expect(error).toBeFalsy()
				expect(response.statusCode).toEqual(200)
				expect(body.indexOf('<title>Victor Tomilin | Personal web site</title>')).not.toEqual(-1)
				expect(body.indexOf('hello! i am')).not.toEqual(-1)
			})
		})
	})
})
