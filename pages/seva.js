import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Solo() {
  const embeds = [
    {
      id: 1,
      html: `
        <blockquote class="imgur-embed-pub" lang="en" data-id="ClZVm8e">
          <a href="https://imgur.com/ClZVm8e">View post on imgur.com</a>
        </blockquote>
      `,
      text: 'Health awareness campaigns play a crucial role in educating communities about healthy lifestyles. By promoting topics like nutrition, exercise, and mental well-being, these initiatives empower individuals to make informed choices. Ultimately, fostering a culture of health can lead to reduced disease rates and improved quality of life for all.'
    },
    {
      id: 2,
      html: `
        <blockquote class="imgur-embed-pub" lang="en" data-id="wIjGIve">
          <a href="https://imgur.com/wIjGIve">Healthy Eating on imgur.com</a>
        </blockquote>
      `,
      text: 'Healthy Eating'
    },
    // Add more embeds as needed
  ];

  // Ensure the Imgur embed script is loaded dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s.imgur.com/min/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Seva Activity</h1>
      <p className="mb-4">
        Seva activities done under UHV.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {embeds.map((embed) => (
          <div key={embed.id} className="relative bg-indigo-100 rounded-lg shadow-lg overflow-hidden group">
            <div
              className="w-full h-auto"
              dangerouslySetInnerHTML={{ __html: embed.html }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
              {embed.text}
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
