import Link from 'next/link';
import Layout from '../components/Layout';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Health Awareness Campaign', page: 'solo' },
    { id: 2, title: 'Seva Activity', page: 'seva' },
  ];

  return (
    <Layout>
      <h2 className="text-3xl font-bold">Activities</h2>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-indigo-700 rounded-lg">
            <Link href={`/${post.page}`} className="text-white hover:underline text-xl font-bold">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
