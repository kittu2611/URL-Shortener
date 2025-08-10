import React from 'react';
import UrlForm from '../components/UrlForm';

const HomePage = () => {
  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl w-full max-w-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-4 tracking-wide">
          🔗 URLite
        </h1>
        <p className="text-base text-gray-700 text-center mb-8">
          Paste your long URL below and let&nbsp;
          <span className="font-semibold text-indigo-600">URLite</span>&nbsp;shrink it in a blink.
        </p>
        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
