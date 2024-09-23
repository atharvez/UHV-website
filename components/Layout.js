// components/Layout.js
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../pages/footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-indigo-200 flex flex-col">
      <Head>
        <title>Universal Human Values</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <header className="bg-indigo-950 shadow flex justify-between items-center p-2 md:p-4">
        <h1 className="text-lg md:text-3xl font-bold text-white">Universal Human Values</h1>
        <nav className="flex space-x-2 md:space-x-4">
          <Link href="/" className="text-white font-bold rounded-full border-2 border-white px-2 py-1 md:px-4 md:py-2 hover:bg-white hover:text-black transition-shadow">
            Home
          </Link>
          <Link href="/activites" className="text-white font-bold rounded-full border-2 border-white px-2 py-1 md:px-4 md:py-2 hover:bg-white hover:text-black transition-shadow">
            Activities
          </Link>
          <Link href="/images" className="text-white font-bold rounded-full border-2 border-white px-2 py-1 md:px-4 md:py-2 hover:bg-white hover:text-black transition-shadow">
            Images
          </Link>
        </nav>
      </header>

      <main className="py-6 md:py-10 flex-grow">
        <div className="max-w-full md:max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg p-4 md:p-6">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
