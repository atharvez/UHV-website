
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Solo() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Health Awareness Campaign</h1>
      <p className="mb-4">
        This campaign focuses on spreading awareness about health issues and encouraging healthy lifestyles.
      </p>
      <div className='bg-white rounded-sm max-w-60'>
        <p>Review</p>
      </div>
      <Link href="/activites" className="text-white hover:underline">
      Back to Activities
      </Link>
    </Layout>
  );
}
