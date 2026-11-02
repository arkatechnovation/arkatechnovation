'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold">Something went wrong</h2>
      <p className="mt-2 text-sm text-zinc-600 max-w-md">{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

