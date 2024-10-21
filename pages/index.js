import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4">Welcome to Universal Human Values</h1>
        <p className="text-gray-600 mb-10">Explore our UHV activities and content.</p>
        
        <div className="py-10 w-full">
          <ImageSlider />
        </div>

        {/* About Faculty Section */}
        <div className="py-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About the Faculty</h2>
        </div>
        
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="flex items-center space-x-6">
            <img
              src="https://i.imgur.com/sq4sx4W.jpeg"
              alt="Faculty Image"
              className="w-32 h-32 rounded-full object-cover shadow-md" // Fixed size for the photo
            />
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">Dr. Kaustubh Jadhav</h3>
              <p className="text-black font-semibold">UHV Faculty</p>
              <p className="mt-2 text-sm text-gray-600">
                Dr. Kaustubh Jadhav is a passionate trainer specializing in communication and platform skills. He has contributed to two national-level NGOs, focusing on anti-human trafficking initiatives, women's empowerment, and sustainable livelihoods. His accolades include the Spark of Brilliance Award, Best Trainer and Placement Coordinator for West Zone (Pune), and the Excellent Content Creator Award for designing the communication skills syllabus for Lighthouse Communities Foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}