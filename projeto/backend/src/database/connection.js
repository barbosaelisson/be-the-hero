const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); // Pode estar com erro.....


module.exports = connection;