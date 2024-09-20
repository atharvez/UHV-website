// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">My Tailwind Blog</h1>
          <nav className="mt-4">
            <Link href="/" className="text-white mr-4 hover:underline">Home</Link>
            <Link href="/blog" className="text-white mr-4 hover:underline">Blog</Link>
            <Link href="/images" className="text-white hover:underline">Images</Link>
          </nav>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg p-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
