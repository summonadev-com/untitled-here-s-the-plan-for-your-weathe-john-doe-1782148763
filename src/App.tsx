import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="flex items-center justify-center min-h-screen bg-slate-100 text-slate-400 text-lg">Weather App Loading…</div>} />
      </Routes>
    </BrowserRouter>
  );
}
