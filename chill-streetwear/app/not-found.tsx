import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="rounded-md bg-black px-4 py-2 text-white transition hover:bg-black/80"
      >
        Return Home
      </Link>
    </div>
  );
}
