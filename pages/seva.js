import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Solo() {
  const photos = [
    { id: 1, src: '', text: ''},
    { id: 2, src: '', text: '' },
    { id: 3, src: '', text: '' },
    { id: 4, src: '', text: '' },
    { id: 5, src: '', text: '' },
    { id: 6, src: '', text: '' },
  ];
  const review =[
    { id: 1, text: ""}
  ]

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-white">Health Awareness Campaign</h1>
      <p className="mb-4">
        This campaign focuses on spreading awareness about health issues and encouraging healthy lifestyles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg p-4 shadow-lg">
            <Image
              src={photo.src}
              alt={photo.text}
              width={120}
              height={80}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <p key={review.id} className="text-center mt-2 text-black font-medium">{review.text}</p>
          </div>
        ))}
      </div>

      <Link href="/activites" className="text-blue-500 hover:underline mt-6 block">
        Back to Activities
      </Link>
    </Layout>
  );
}
