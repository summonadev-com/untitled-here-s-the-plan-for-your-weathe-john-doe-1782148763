import type { WeatherData } from '@/types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.iconCode}@2x.png`;

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 px-8 pt-8 pb-6 text-white text-center">
        <p className="text-blue-100 text-sm font-medium uppercase tracking-widest mb-1">
          {weather.country}
        </p>
        <h2 className="text-3xl font-bold">{weather.city}</h2>
        <img
          src={iconUrl}
          alt={weather.description}
          className="w-20 h-20 mx-auto my-2 drop-shadow"
        />
        <p className="text-6xl font-extrabold tracking-tight">{weather.temperature}°</p>
        <p className="capitalize text-blue-100 mt-1 text-base">{weather.description}</p>
      </div>

      {/* Details */}
      <div className="px-8 py-6 grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl">🌡️</span>
          <span className="text-slate-800 font-semibold text-sm">{weather.feelsLike}°C</span>
          <span className="text-slate-400 text-xs">Feels like</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl">💧</span>
          <span className="text-slate-800 font-semibold text-sm">{weather.humidity}%</span>
          <span className="text-slate-400 text-xs">Humidity</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl">💨</span>
          <span className="text-slate-800 font-semibold text-sm">{weather.windSpeed} m/s</span>
          <span className="text-slate-400 text-xs">Wind</span>
        </div>
      </div>
    </div>
  );
}
