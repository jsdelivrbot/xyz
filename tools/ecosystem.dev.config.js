module.exports = {
	apps : [{
		name: 'server',
		script: 'src/env/development/index.js',
		env: {
			NODE_ENV: 'development',
		}
	},
	{
		name: 'webpack',
		script: 'src/env/development/bundle.js',
		env: {
			NODE_ENV: 'development',
		}
	}]
}
