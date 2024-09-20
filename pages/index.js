import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Welcome to My Blog Website</h2>
      <p className="mt-4 text-gray-600">
        This is a simple blog website built with Next.js and styled using Tailwind CSS.
      </p>
      <p className="mt-2">Explore the blog or view some images!</p>
    </Layout>
  );
}
