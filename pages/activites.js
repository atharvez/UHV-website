import Link from 'next/link';
import Layout from '../components/Layout';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Health Awareness Campaign', page: 'solo' },
    { id: 2, title: 'Seva Activity', page: 'seva' },
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Activities</h2>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold">{post.title}</h3>
            {/* Link component directly without <a> tag */}
            <Link href={`/${post.page}`} className="text-blue-500 hover:underline">
              View
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
