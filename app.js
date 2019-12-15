const { argv } = require('./config/yargs');
const { getCoor } = require('./place/place');
const { getWeather } = require('./weather/weather');

const getInfo = async address => {
    try {
        const coords = await getCoor(address);
        const temp = await getWeather(coords.lat, coords.lon);
        return `El clima de ${coords.address} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${address}`
    }
}

getInfo(argv.a)
    .then(res => console.log(res))
    .catch(err => console.log(err))