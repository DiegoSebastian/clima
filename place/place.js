const axios = require('axios');

const getCoor = async(place) => {
    const encodedUrl = encodeURI(place);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "84e3b458ccmsh4bcb73042430d03p1ed8fajsncbe18380d592"
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${place}`)
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        address,
        lat,
        lon
    }
}

module.exports = {
    getCoor
}