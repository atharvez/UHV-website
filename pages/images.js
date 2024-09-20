import Layout from '../components/Layout';
import Image from 'next/image';

export default function Images() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold">Image Gallery</h2>
      <div className="mt-4">
        <Image
          src="/images/sample-image.jpg"
          alt="Sample"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <p className="mt-2 text-gray-600">A beautiful image displayed using Next.js Image component.</p>
      </div>
    </Layout>
  );
}
