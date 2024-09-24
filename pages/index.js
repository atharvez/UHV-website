import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className='text-2xl font-bold'>Welcome to Universal Human Values</h1>
        <p>Explore our UHV activities and content.</p>
        <ImageSlider />
        </div>
    </Layout>
  );
}
