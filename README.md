# Weather App

A clean, minimal weather app that shows real-time weather data for any city in the world.

## Getting your free API key

1. Sign up for a free account at [openweathermap.org](https://openweathermap.org/api)
2. Go to your profile → **API keys**
3. Copy your default key (or generate a new one)

## Setup

1. Copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```
2. Open `.env` and paste your API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_actual_key_here
   ```
3. Restart the dev server — you're good to go!

> **Note:** New API keys can take up to 2 hours to activate on OpenWeatherMap's free tier.
