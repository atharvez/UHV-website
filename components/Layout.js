// components/Layout.js
import Link from 'next/link';
import Head from 'next/head'
import Footer from '../pages/footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
       <Head>
        <title>Universal Human Values</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <header className="bg-red-100 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black text-center">Universal Human Values</h1>
          </div>
          <div className='bg-black shadow-white py-3 justify-between'>
          <nav className="mt-0 ml-2">
            <Link href="/" className="text-white font-bold mr-4 hover:underline px-4">Home</Link>
            <Link href="/activites" className="text-white font-bold mr-4 hover:underline px-4">Activites</Link>
            <Link href="/images" className="text-white font-bold hover:underline px-4">Images</Link>
          </nav>
        </div>
      </header>

      <main className="py-10 flex-grow ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-blue-400 shadow sm:rounded-lg p-6">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
