import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Contact Info */}
        <div className="mb-4 sm:mb-0">
          <p className="font-semibold">Contact: Kritarth Srivastava</p>
          <p>Email: <a href="mailto:kritarth@example.com" className="text-blue-400 hover:underline">kritarth@example.com</a></p>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Kritarth Srivastava. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
