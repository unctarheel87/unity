const Passport = require('passport').Passport
const clientPass = new Passport();
const advisorPass = new Passport();

module.exports = { clientPass, advisorPass }