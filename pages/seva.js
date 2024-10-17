import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Solo() {
  const photos = [
    {
      id: 1,
      src: 'https://i.imgur.com/ClZVm8e.jpg', 
      text: 'During our seva activity at the goshala, we took part in several meaningful tasks. Beyond just cleaning the premises, we also played a role in feeding the cows, making sure they had fresh water, and helped maintain their shelters. A few of us even worked in the fields, preparing fodder and gathering necessary supplies. Additionally, we made a heartfelt donation (daan) to the trust, supporting the ongoing care and needs of the cows. This experience was not just about physical labor, but also about giving back to the community and fostering a deeper connection with the animals and nature. It was a humbling and fulfilling experience for all of us.',
      id: 2,
      src: 'https://i.imgur.com/RT4wgvp.jpg', 
      text: 'This visit was not just an act of kindness but also a lesson in empathy and human connection. We left the old age home with a deep sense of fulfillment, knowing that we had made a difference in their day, and promised ourselves to return soon. It was a powerful reminder that sometimes, the most valuable gift we can offer is our time and a listening ear.',
      id: 3,
      src: 'https://i.imgur.com/ClZVm8e.jpg', 
      text: 'Health awareness campaigns play a crucial role in educating communities about healthy lifestyles. By promoting topics like nutrition, exercise, and mental well-being, these initiatives empower individuals to make informed choices. Ultimately, fostering a culture of health can lead to reduced disease rates and improved quality of life for all.'
    }
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Seva Activity</h1>
      <p className="mb-4">Seva activities done under UHV.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative bg-indigo-100 rounded-lg shadow-lg overflow-hidden group"
          >
            <Image
              src={photo.src}
              alt={photo.text}
              width={1200} // Use a larger width to ensure the image is clear
              height={800} // Set height accordingly
              className="w-full h-auto object-cover rounded-t-lg transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-50"
            />
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
