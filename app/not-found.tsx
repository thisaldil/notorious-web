import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap min-h-[100svh] flex flex-col justify-center">
      <p className="display text-[40vw] leading-[.8]">404</p>
      <p className="label mt-6">This page doesn&apos;t exist.</p>
      <Link href="/" className="label mt-8 w-fit bg-ink text-paper px-8 py-4">Back to home →</Link>
    </div>
  );
}
