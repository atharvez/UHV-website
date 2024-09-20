
import Layout from '../components/Layout';
import Image from 'next/image'

export default function ImagesPage() {
  const images = [
    { id: 1, src: '/images/image1.jpg'},
    { id: 2, src: '/images/image2.jpg'},
    { id: 3, src: '/images/image3.jpg'},
    { id: 4, src: '/images/image3.jpg'},
    { id: 5, src: '/images/image3.jpg'},
    { id: 6, src: '/images/image3.jpg'},
    { id: 7, src: '/images/image3.jpg'},
    { id: 8, src: '/images/image3.jpg'},
    { id: 9, src: '/images/image3.jpg'},
    { id: 10, src: '/images/image3.jpg'},
    { id: 11, src: '/images/image3.jpg' },
    { id: 12, src: '/images/image3.jpg'},
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="border p-2">
            <Image src={image.src} alt={image.alt} className="w-full h-64 object-cover"></Image>
          </div>
        ))}
      </div>
    </Layout>
  );
}
