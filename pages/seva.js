import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Solo() {
  const photos = [
    {
      id: 1,
      src: 'https://i.imgur.com/ClZVm8e.jpg',
      text: 'During our seva at the goshala, we engaged in tasks like cleaning, feeding cows, providing fresh water, and maintaining their shelters. Some of us worked in the fields, preparing fodder and supplies. We also made a heartfelt donation to support the cows care. The experience fostered a deep connection with nature and was both humbling and fulfilling.',
    },
    {
      id: 2,
      src: 'https://i.imgur.com/RT4wgvp.jpg',
      text: 'A recent visit to an old age home deeply touched us as we connected with the residents through their heartfelt stories. They longed for companionship, and simply listening to them was incredibly meaningful. We also brought thoughtful gifts like blankets, food, and self-care products, which were warmly received. The experience was not just an act of kindness but a lesson in empathy and human connection. We left with a sense of fulfillment, promising to return, realizing that sometimes the greatest gift we can give is our time and attention.',
    },
    {
      id: 3,
      src: 'https://i.imgur.com/wIjGIve.jpg',
      text: 'We got to know about how the people who are in this old age home miss their family sons and daughters very much. When we started our activity, they treated us like their grandchildren. It was heartwarming, and we felt relieved from stress just by helping and being with them.',
    },
    {
      id: 4,
      src: 'https://i.imgur.com/qOzQzr2.jpg',
      text: 'My experience at the old age home was heartwarming and emotional. Many elderly residents shared their stories, expressing loneliness and their perspectives on life. Initially, I faced some communication challenges, but as they grew comfortable, we had meaningful conversations about their life in the ashram.',
    },
    {
      id: 5,
      src: 'https://i.imgur.com/3NTxT0w.jpg',
      text: 'We had a wonderful time at the goshala during our seva activity! Welcomed warmly by the family, we spent the evening feeding cows, cleaning their shelters, and ensuring they had fresh water. We also learned about the Gobar gas plant and the use of cow dung. The experience fostered teamwork, laughter, and interesting stories from the owners. It was a fulfilling experience, and we look forward to returning to strengthen our bond with the animals and each other!',
    },
    {
      id: 6,
      src: 'https://i.imgur.com/t1mCs6j.jpg',
      text: 'A group visit to a gaushala is a rewarding experience, combining hands-on activities with learning. We fed and groomed the cows, learning about their care and cultural significance. Workshops and team efforts in cleaning fostered community and responsibility. The visit deepened our understanding of animal welfare and sustainable practices.',
    },
    {
      id: 7,
      src: 'https://i.imgur.com/GtO5J9c.jpg',
      text: 'We chose Puneruthan Samarasatab Gurukulam, an orphanage for children aged 8 to 16, for our SEVA activity. A group of 13 of us spent time with the kids, admiring their pottery skills and the beautiful Diwali diyas they made. They also showed us their classroom and innovation room where they create bamboo lamps and mobile stands. We gifted them some items, and in return, they taught us the true value of life with their smiles and creativity.',
    },
    {
      id: 8,
      src: 'https://i.imgur.com/WliUAJt.jpg',
      text: 'On 14 September, our team Rest Revolution visited Zilla Parishad School and Sojar Madhyamik Vidhyalaya in Kurvande, Lonavala. After gaining permission from the faculty, we excitedly interacted with the students. We introduced ourselves and shared career guidance based on our experiences in higher education. To keep the energy up, we played games and addressed their study-related queries. At the end, we distributed snacks, and their warm smiles were the most rewarding part of the visit.',
    },
    {
      id: 9,
      src: 'https://i.imgur.com/bFPbW2E.jpg',
      text: 'It was one of the saddest experiences we have had, seeing the elderly suffer from loneliness. It was clear they deeply missed their loved ones—some longed for their children, others for their grandchildren. Despite the sadness, the positive side was that we had the opportunity to serve them, spend time with them, and offer some comfort. It was a truly rewarding experience.',
    },

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
            style={{ width: '350px', height: '250px' }} // Larger container size
          >
            <Image
              src={photo.src}
              alt={photo.text}
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Ensures the image covers the container without distortion
              className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-2 text-sm leading-tight">
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
