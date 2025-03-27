import React from 'react';

function Footer() {
  return (
    <div className="bg-black px-10 py-6 text-white">
      <div className="flex items-center space-x-4">
        <img src="/aiLog.png" alt="AI Logo" width={100} height={100} className="object-contain"/>
        <p className="text-gray-300">
          Transform your photos with AI-powered editing tools. Create stunning visuals with just a few clicks.
        </p>
      </div>
    </div>
  );
}

export default Footer;
