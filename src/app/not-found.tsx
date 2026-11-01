import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-2xl">
        404
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Page Not Found</h2>
      <p className="text-xs text-slate-500 max-w-sm">
        The requested Avash student record, campaign, or page could not be located.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow"
      >
        Return to Home
      </Link>
    </div>
  );
}

