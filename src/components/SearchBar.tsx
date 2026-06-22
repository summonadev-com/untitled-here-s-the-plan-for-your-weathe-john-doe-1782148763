import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  disabled?: boolean;
}

export default function SearchBar({ onSearch, disabled }: SearchBarProps) {
  const [value, setValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
        <span className="pl-4 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </span>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Search for a city…"
          disabled={disabled}
          className="flex-1 px-4 py-4 text-slate-700 placeholder-slate-400 bg-transparent outline-none text-base disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="m-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-xl font-medium text-sm transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </form>
  );
}
