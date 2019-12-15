const { argv } = require('yargs').options({
    address: {
        alias: 'a',
        demand: true,
        desc: 'Dirección'
    }
}).help();

module.exports = {
    argv
}