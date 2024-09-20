import Layout from '../components/Layout';

export default function Blog() {
  const posts = [
    { id: 1, title: 'My First Post', description: 'This is the first blog post.' },
    { id: 2, title: 'Exploring Next.js', description: 'Next.js is an amazing framework.' },
    { id: 3, title: 'Styling with Tailwind', description: 'Learn how to style your site.' },
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Blog Posts</h2>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
