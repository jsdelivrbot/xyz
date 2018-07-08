const { spawn } = require('child_process')
const request = require('request')

const child = spawn('node', ['../bundle.js'], {})

function init() {
	return new Promise(resolve => child.stdout.on('data', resolve))
}

describe('Webpack development server', () => {
	test('should get the javascript bundle', () => {
		init().then(() => {
			child.kill()
			request('http://127.0.0.1:4040/dist/bundle.js', (error, response) => {
				expect(error).toBeFalsy()
				expect(response.statusCode).toEqual(200)
			})
		})
	})

	test('should get the stylesheet bundle', () => {
		init().then(() => {
			child.kill()
			request('http://127.0.0.1:4040/dist/main.css', (error, response) => {
				expect(error).toBeFalsy()
				expect(response.statusCode).toEqual(200)
			})
		})
	})
})
