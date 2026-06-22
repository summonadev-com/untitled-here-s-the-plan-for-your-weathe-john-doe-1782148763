import type { WeatherData } from '@/types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY as string;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city: string): Promise<WeatherData> {
  if (!API_KEY) {
    throw new Error('API key is missing. Please add VITE_OPENWEATHER_API_KEY to your .env file.');
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
    }
    if (response.status === 401) {
      throw new Error('Invalid API key. Please check your VITE_OPENWEATHER_API_KEY.');
    }
    throw new Error('Failed to fetch weather data. Please try again.');
  }

  const data = await response.json();

  return {
    city: data.name as string,
    country: data.sys.country as string,
    temperature: Math.round(data.main.temp as number),
    feelsLike: Math.round(data.main.feels_like as number),
    condition: data.weather[0].main as string,
    description: data.weather[0].description as string,
    iconCode: data.weather[0].icon as string,
    windSpeed: Math.round(data.wind.speed as number),
    humidity: data.main.humidity as number,
  };
}
