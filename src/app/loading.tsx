export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="min-h-screen bg-white">
      <div className="bg-navy-950 pb-24 pt-44">
        <div className="container-x animate-pulse space-y-5">
          <div className="h-3 w-40 rounded-full bg-white/10" />
          <div className="h-12 w-3/4 max-w-2xl rounded-xl bg-white/10" />
          <div className="h-4 w-1/2 max-w-xl rounded-full bg-white/10" />
        </div>
      </div>
      <div className="container-x grid animate-pulse gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 rounded-2xl bg-slate-100" />
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
