const nodemon = require('nodemon')

nodemon({
	script: 'src/env/development/server.js',
	ext: 'js ejs json',
	ignore: ['assets/*', '*/bandle.js'],
})

nodemon.on('start', function () {
	process.stdout.write('\033c')
	console.log('App has started')
}).on('quit', function () {
	console.log('App has quit')
	process.exit()
}).on('restart', function (files) {
	console.log('App restarted due to: ', files)
})
