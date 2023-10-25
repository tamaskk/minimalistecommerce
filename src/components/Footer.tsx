import React from 'react';

// Define the Footer functional component
const Footer = () => {
  return (
    <footer className='w-screen h-auto'>
      {/* Upper section of the footer with newsletter */}
      <div className='bg-zinc-900 text-white flex flex-col items-center justify-center py-28'>
        <h1 className='text-4xl font-bold mb-4'>Newsletter</h1>
        <div>
          {/* Input field for email and a subscribe button */}
          <input type='text' placeholder='anything@anywhere.com' className='py-2 pr-10 pl-2 placeholder:text-sm' />
          <button className='px-2 py-2 bg-white text-black ml-2'>Subscribe</button>
        </div>
      </div>

      {/* Lower section of the footer with links and copyright */}
      <div className='bg-black text-white flex flex-col items-center justify-center py-16 text-lg gap-10'>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='flex flex-row gap-5 mb-4'>
            {/* Links to various sections such as About, Store Locator, and FAQs */}
            <a href='#'>About</a>
            <a href='#'>Store Locator</a>
            <a href='#'>FAQs</a>
          </div>
          <div className='flex flex-row gap-5'>
            {/* Links to other sections like News, Careers, and Contact Us */}
            <a href='#'>News</a>
            <a href='#'>Careers</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
        {/* Copyright notice */}
        <h1>All Rights Reserved KFurniture Co</h1>
      </div>
    </footer>
  );
}

export default Footer;
