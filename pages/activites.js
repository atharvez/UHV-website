import Link from 'next/link';
import Layout from '../components/Layout';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Health Awareness Campaign'},
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Activites</h2>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <Link href="/solo">Here</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
