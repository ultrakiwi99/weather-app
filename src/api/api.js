export async function getForecast(params) {
  const fromApi = await getFromApiForecast(params);
  if (fromApi.cod === "404") {
    return {
      error: fromApi.message
    };
  }

  const city = fromApi.city.name;
  const forecast = fromApi.list.map(item => ({
    city,
    date: item.dt,
    condition: item.weather[0].description,
    daytemp: {
      morning: item.temp.morn,
      day: item.temp.day,
      evening: item.temp.eve,
      night: item.temp.night
    }
  }));

  return {
    weather: forecast[0],
    forecast: forecast.slice(1)
  };
}

async function getFromApiForecast(params) {
  if (!params.name) {
    return JSON.stringify({ cod: "404", message: "No city name passed." });
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${params.name}&units=${params.units}&cnt=8&appid=d4b4a6de50b7342bf17326a58582d82c`
  );

  return res.json();
}

// function makeQueryParams(params) {

// }
