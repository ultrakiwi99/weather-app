export const weatherForCity = city =>
  getApiResponse(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4b4a6de50b7342bf17326a58582d82c&callback=none`
  );

async function getApiResponse(url) {
  return fetch(url).then(res => {
    return res.json();
  });
}
