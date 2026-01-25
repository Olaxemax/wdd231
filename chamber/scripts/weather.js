// weather.js
// Replace YOUR_API_KEY with your OpenWeatherMap API key
const apiKey = "a8c4c31d1c32548f8b15ca9858bc075a";
const city = "Lagos"; // Change to your chamber's city
const units = "imperial"; // "imperial" = Fahrenheit, "metric" = Celsius

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("Weather data not available");
    const data = await response.json();

    // Current weather
    const current = data.list[0];
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
      <p><strong>Temperature:</strong> ${current.main.temp}°</p>
      <p><strong>Condition:</strong> ${current.weather[0].description}</p>
    `;

    // 3-day forecast (next 3 days at noon)
    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    forecast.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString();
      weatherInfo.innerHTML += `
        <p>${date}: ${day.main.temp}°, ${day.weather[0].description}</p>
      `;
    });
  } catch (error) {
    console.error(error);
    document.getElementById("weather-info").textContent = "Unable to load weather data.";
  }
}

getWeather();