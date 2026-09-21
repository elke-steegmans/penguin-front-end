import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1>Page not found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <Link href="/" className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
        Go home
      </Link>
    </main>
  )
}
