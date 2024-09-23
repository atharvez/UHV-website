
import Layout from '../components/Layout';
import Image from 'next/image';

export default function ImagesPage() {
  const images = [
    { id: 1, src: '', alt: 'Image 1' },
    { id: 2, src: '', alt: 'Image 2' },
    { id: 3, src: '', alt: 'Image 3' },
    { id: 4, src: '', alt: 'Image 4' },
    { id: 5, src: '', alt: 'Image 5' },
    { id: 6, src: '', alt: 'Image 6' },
    { id: 7, src: '', alt: 'Image 7' },
    { id: 8, src: '', alt: 'Image 8' },
    { id: 9, src: '', alt: 'Image 9' },
    { id: 10, src: '', alt: 'Image 10' },
    { id: 11, src: '', alt: 'Image 11' },
    { id: 12, src: '', alt: 'Image 12' },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="border-2 border-black p-2">
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

