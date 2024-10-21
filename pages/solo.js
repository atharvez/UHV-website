import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Solo() {
  const photos = [
    { id: 1, src: 'https://i.imgur.com/SXVnevR.jpeg', text: '' },
    { id: 2, src: 'https://i.imgur.com/IMbq5um.jpeg', text: '' },
    { id: 3, src: 'https://i.imgur.com/1xHvu0H.jpeg', text: '' },
    { id: 4, src: 'https://i.imgur.com/Ooc0jFQ.jpeg', text: '' },
    { id: 5, src: 'https://i.imgur.com/uIwJF6Z.jpeg', text: '' },
    { id: 6, src: 'https://i.imgur.com/9muvLxs.jpeg', text: '' },
    { id: 7, src: 'https://i.imgur.com/cJBBS1R.jpeg', text: '' },
    { id: 8, src: 'https://i.imgur.com/cqVw05c.jpeg', text: '' },
    { id: 9, src: 'https://i.imgur.com/mjMOZXj.jpeg', text: '' },
    { id: 10, src: 'https://i.imgur.com/L43bqIO.jpeg', text: '' },
    { id: 11, src: 'https://i.imgur.com/HJqh6K3.jpeg', text: '' },
    { id: 12, src: 'https://i.imgur.com/UYXPqSE.jpeg', text: '' },
    { id: 13, src: 'https://i.imgur.com/QJtnS6a.jpeg', text: '' },
    { id: 14, src: 'https://i.imgur.com/Tr2fFFg.jpeg', text: '' },
    { id: 15, src: 'https://i.imgur.com/uim6NpC.jpeg', text: '' },

  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Health Awareness Campaign</h1>
      <p className="mb-4">
        This campaign focuses on spreading awareness about health issues and encouraging healthy lifestyles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="w-full h-64 relative">
              <Image
                src={photo.src}
                alt={photo.text}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <p className="text-center mt-2 text-black font-medium">
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