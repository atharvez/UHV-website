import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Solo() {
  const photos = [
    { id: 1, src: '', text: 'Healthy Eating',team : 'Team Members', paragraph: '' },
    { id: 2, src: '', text: 'Exercise Regularly' },
    { id: 3, src: '', text: 'Mental Health' },
    { id: 4, src: '', text: 'Stay Hydrated' },
    { id: 5, src: '', text: 'Regular Checkups' },
    { id: 6, src: '', text: 'Get Enough Sleep' },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Health Awareness Campaign</h1>
      <p className="mb-4">
        This campaign focuses on spreading awareness about health issues and encouraging healthy lifestyles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg p-4 shadow-lg">
            <Image
              src={photo.src}
              alt={photo.text}
              width={200}
              height={100}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <p className="text-center mt-2 text-gray-700 font-medium">{photo.text}</p>
            <p className='text-left mt-2 text-black font-normal'>{photo.paragraph}</p>
          </div>
        ))}
      </div>

      <Link href="/activites" className="text-blue-500 hover:underline mt-6 block">
        Back to Activities
      </Link>
    </Layout>
  );
}
