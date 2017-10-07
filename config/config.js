module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOSTNAME,
		dialect: 'mysql',
		operatorsAliases: false,
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	},
	test: {
		username: process.env.CI_DB_USERNAME,
		password: process.env.CI_DB_PASSWORD,
		database: process.env.CI_DB_DATABASE,
		host: process.env.CI_DB_HOSTNAME,
		dialect: 'mysql',
		operatorsAliases: false,
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	},
	production: {
		username: process.env.PROD_DB_USERNAME,
		password: process.env.PROD_DB_PASSWORD,
		database: process.env.PROD_DB_DATABASE,
		host: process.env.PROD_DB_HOSTNAME,
		dialect: 'mysql',
		operatorsAliases: false,
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	}
}