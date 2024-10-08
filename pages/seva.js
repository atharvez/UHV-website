import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Solo() {
  const photos = [
    { id: 1, src: 'https://blogimage.vantagefit.io/vfitimages/2021/06/Employee-Health.png', text: 'Health awareness campaigns play a crucial role in educating communities about healthy lifestyles. By promoting topics like nutrition, exercise, and mental well-being, these initiatives empower individuals to make informed choices. Ultimately, fostering a culture of health can lead to reduced disease rates and improved quality of life for all.' },
    { id: 2, src: 'https://via.placeholder.com/1920x720.png?text=Healthy+Eating', text: 'Healthy Eating' },
    { id: 3, src: 'https://via.placeholder.com/1920x720.png?text=Regular+Exercise', text: 'Regular Exercise' },
    { id: 4, src: 'https://via.placeholder.com/1920x720.png?text=Mental+Health', text: 'Mental Health' },
    { id: 5, src: 'https://via.placeholder.com/1920x720.png?text=Stay+Hydrated', text: 'Stay Hydrated' },
    { id: 6, src: 'https://via.placeholder.com/1920x720.png?text=Sleep+Well', text: 'Sleep Well' },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Seva Activity</h1>
      <p className="mb-4">
        Seva activities done under UHV.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative bg-indigo-100 rounded-lg shadow-lg overflow-hidden group"
          >
            {photo.src && (
              <Image
                src={photo.src}
                alt={photo.text}
                width={120}
                height={80}
                className="w-full h-auto object-cover rounded-t-lg transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-50"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
              {photo.text}
            </p>
          </div>
        ))}
      </div>

      <Link href="/activites" className="text-blue-500 hover:underline mt-6 block">
        Back to Activities
      </Link>
    </Layout>
  );
}
