export default function LoadingSkeleton() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-pulse">
      {/* Header skeleton */}
      <div className="bg-gradient-to-br from-blue-300 to-blue-400 px-8 pt-8 pb-6 flex flex-col items-center gap-3">
        <div className="h-3 w-16 bg-blue-200 rounded-full" />
        <div className="h-7 w-32 bg-blue-200 rounded-full" />
        <div className="w-20 h-20 bg-blue-200 rounded-full my-2" />
        <div className="h-14 w-24 bg-blue-200 rounded-xl" />
        <div className="h-4 w-28 bg-blue-200 rounded-full" />
      </div>

      {/* Details skeleton */}
      <div className="px-8 py-6 grid grid-cols-3 gap-4 text-center">
        {[0, 1, 2].map(i => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
            <div className="h-4 w-10 bg-slate-200 rounded-full" />
            <div className="h-3 w-14 bg-slate-100 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
