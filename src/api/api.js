export async function getForecast(params) {
  const fromApi = params.city
    ? await getFromApiForecast(params)
    : await getFromApiLocForecast(params);

  if (fromApi.cod === "404") {
    return {
      error: fromApi.message
    };
  }
  return apiReponseToWeatherFacade(fromApi);
}

async function getFromApiForecast(params) {
  if (!params.city) {
    return JSON.stringify({ cod: "404", message: "No city name passed." });
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${params.city}&units=${params.units}&cnt=8&appid=d4b4a6de50b7342bf17326a58582d82c`
  );

  return res.json();
}

async function getFromApiLocForecast(params) {
  if (!params.lat || !params.long) {
    return JSON.stringify({ cod: "404", message: "No coordinates passed." });
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${params.lat}&lon=${params.long}&units=${params.units}&cnt=8&appid=d4b4a6de50b7342bf17326a58582d82c`
  );

  return res.json();
}

function apiReponseToWeatherFacade(fromApi) {
  const city = fromApi.city ? fromApi.city.name : fromApi.name;
  const forecast = fromApi.list.map(item => ({
    city,
    date: item.dt,
    condition: item.weather[0].description,
    daytemp: {
      morning: parseInt(item.temp.morn),
      day: parseInt(item.temp.day),
      evening: parseInt(item.temp.eve),
      night: parseInt(item.temp.night)
    }
  }));

  return {
    weather: forecast[0],
    forecast: forecast.slice(1)
  };
}
