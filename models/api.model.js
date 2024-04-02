async function getLocationInfo(pincode) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?postalcode=${pincode}&format=json`);
        if (response.status === 200) {
            if (response.data.length === 0) {
                throw new Error('Location data not found');
            } else {
                return response.data;
            }
        } else {
            throw new Error('Failed to fetch location data');
        }
    } catch (err) {
        console.error(err.message);
        return err
    }
}

async function getWeatherInfo(locationInfo){ 
    try{
        const { lat, lon } = locationInfo?.[0];
        const weatherInfo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        if(weatherInfo.status === 200){
            return weatherInfo.data
        }
        else {
            throw new Error('Failed to fetch weather data');
        }
    }catch (err) {
        console.error(err.message);
    }
}
module.exports = {
    getLocationInfo,
    getWeatherInfo
}