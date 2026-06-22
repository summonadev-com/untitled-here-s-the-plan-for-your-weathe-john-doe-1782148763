import { useState } from 'react';
import { fetchWeather } from '@/lib/weatherApi';
import type { WeatherData } from '@/types/weather';

interface UseWeatherReturn {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  search: (city: string) => Promise<void>;
}

export function useWeather(): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function search(city: string) {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const data = await fetchWeather(city.trim());
      setWeather(data);
    } catch (e: any) {
      setError(e.message as string);
    } finally {
      setLoading(false);
    }
  }

  return { weather, loading, error, search };
}
