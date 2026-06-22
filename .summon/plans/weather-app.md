---
status: pending
title: Weather App
---

## Overview
A clean, minimal weather app that lets users search for any city and see real live weather data pulled from the OpenWeatherMap API.

## Steps

1. **Set up the project foundation**
   - Create /app/src/main.tsx as the app entry point, importing the global stylesheet and rendering the root component.
   - Create /app/src/styles/global.css starting with `@import "tailwindcss";`.
   - Create /app/src/App.tsx as the root component that renders the main page.
   - Create /app/index.html as the HTML entry point.
   - Create /app/vite.config.ts configured with the React and Tailwind CSS v4 Vite plugins.
   - Create /app/package.json with all required dependencies: React 19, Vite, TypeScript, @tailwindcss/vite, @vitejs/plugin-react.
   - Create /app/tsconfig.json and /app/tsconfig.app.json with path alias `@/` pointing to `/app/src/`.

2. **Define shared types**
   - Create /app/src/types/weather.ts defining TypeScript types for the weather API response, including city name, temperature, weather condition, description, icon code, wind speed, and humidity.

3. **Create a weather API utility**
   - Create /app/src/lib/weatherApi.ts with a function that accepts a city name and fetches current weather data from the OpenWeatherMap API (api.openweathermap.org/data/2.5/weather).
   - The function should read the API key from the Vite environment variable `VITE_OPENWEATHER_API_KEY`.
   - It should return typed weather data or throw a meaningful error if the city is not found or the request fails.

4. **Create a custom hook for weather fetching**
   - Create /app/src/hooks/useWeather.ts that manages state for: the weather result, a loading flag, and an error message.
   - Expose a function to trigger a city search, and return all state values to the caller.

5. **Build the search bar component**
   - Create /app/src/components/SearchBar.tsx as a controlled input with a submit button.
   - It should accept an `onSearch` callback prop and call it with the trimmed city name when the user submits (via button click or pressing Enter).
   - Style it cleanly with a rounded input field and a subtle search button on the right, using light neutral tones.

6. **Build the weather display card component**
   - Create /app/src/components/WeatherCard.tsx that accepts weather data as props and displays:
     - City name and country
     - Weather condition icon (from openweathermap.org/img/wn/<icon>@2x.png)
     - Current temperature in Celsius
     - Weather description (e.g. "light rain", "clear sky")
     - Wind speed and humidity as secondary details
   - Style it as a centered card with a soft shadow, clean typography, and light background on a white/light page.

7. **Build a loading skeleton component**
   - Create /app/src/components/LoadingSkeleton.tsx that displays animated placeholder blocks in the shape of the weather card while data is being fetched.

8. **Build the main weather page**
   - Create /app/src/pages/WeatherPage.tsx that:
     - Uses the useWeather hook to manage state.
     - Renders the SearchBar at the top.
     - Shows the LoadingSkeleton while loading.
     - Shows an inline error message if the city is not found or the request fails.
     - Shows the WeatherCard when data is successfully loaded.
     - Shows a friendly prompt (e.g. "Search for a city to see the weather") when no search has been made yet.
   - Style the page with a light background, centered layout, and generous spacing.

9. **Wire everything together in App.tsx**
   - Update /app/src/App.tsx to render WeatherPage as the main content of the app.

10. **Document API key setup**
    - Create /app/.env.example with a placeholder: `VITE_OPENWEATHER_API_KEY=your_api_key_here`.
    - Update /app/README.md with brief instructions: sign up at openweathermap.org for a free API key, copy .env.example to .env, and paste the key in.
