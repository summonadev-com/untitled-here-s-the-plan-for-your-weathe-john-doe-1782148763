import { useWeather } from '@/hooks/useWeather';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import LoadingSkeleton from '@/components/LoadingSkeleton';

export default function WeatherPage() {
  const { weather, loading, error, search } = useWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center px-4 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">⛅</div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Weather App</h1>
        <p className="text-slate-500 mt-1 text-sm">Get real-time weather for any city in the world</p>
      </div>

      {/* Search */}
      <div className="w-full max-w-lg mb-10">
        <SearchBar onSearch={search} disabled={loading} />
      </div>

      {/* States */}
      {loading && <LoadingSkeleton />}

      {error && (
        <div className="w-full max-w-sm bg-red-50 border border-red-200 rounded-2xl px-6 py-4 text-center">
          <p className="text-red-500 text-sm font-medium">⚠️ {error}</p>
        </div>
      )}

      {!loading && !error && weather && (
        <WeatherCard weather={weather} />
      )}

      {!loading && !error && !weather && (
        <div className="flex flex-col items-center gap-3 mt-6 text-slate-400">
          <span className="text-6xl">🌍</span>
          <p className="text-base font-medium">Search for a city to see the weather</p>
        </div>
      )}

      {/* API key hint */}
      {!import.meta.env.VITE_OPENWEATHER_API_KEY && (
        <div className="mt-10 w-full max-w-lg bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-center">
          <p className="text-amber-700 text-sm font-medium">🔑 API key not set</p>
          <p className="text-amber-600 text-xs mt-1">
            Sign up at <strong>openweathermap.org</strong> for a free key, then add it to your <code className="bg-amber-100 px-1 rounded">.env</code> file as <code className="bg-amber-100 px-1 rounded">VITE_OPENWEATHER_API_KEY=your_key</code>
          </p>
        </div>
      )}
    </div>
  );
}
