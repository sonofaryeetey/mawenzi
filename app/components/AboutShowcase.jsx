import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutShowcase = () => {
  return (
    <section className="relative w-full rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-16 p-6 md:p-12" style={{ background: '#e7f4f5' }}>
      {/* Left Side: Headline & CTA */}
      <div className="flex-1 flex flex-col justify-center items-start md:pr-10 z-10">
        <h1 className="font-Outfit text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Empowering Providers,<br />
          <span className="text-blue-500">Transforming Care</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-md">
          Improve the health and well-being of underserved communities by expanding access to comprehensive, coordinated care, and empowering healthcare providers with the tools to deliver effective, patient-centered care.
        </p>
        <div className="flex gap-4 mb-6">
          <Link href="/Contact" legacyBehavior>
            <a className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition">Contact Us</a>
          </Link>
          <Link href="/Services" legacyBehavior>
            <a className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">Our Services</a>
          </Link>
        </div>
        <div className="flex items-center mt-2">
          <Image src="/mawenzi_logo.png" width={36} height={36} alt="Mawenzi Logo" className="rounded-full" />
          <span className="ml-3 text-gray-500 text-sm">Trusted by clinics & providers</span>
        </div>
      </div>

      {/* Right Side: Doctor Image & Floating Cards */}
      <div className="flex-1 flex items-center justify-center relative mt-10 md:mt-0">
        {/* Doctor Image with blue background shape */}
        <div className="relative w-[380px] h-[480px] md:w-[440px] md:h-[540px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-blue-100" style={{ zIndex: 1 }} />
          <Image
            src="/Empower.jpg"
            alt="Doctor"
            fill
            className="object-cover rounded-3xl relative z-10"
            sizes="(max-width: 768px) 380px, 440px"
          />
          {/* Floating Card 1 */}
          <div className="absolute top-8 left-[-60px] bg-white rounded-xl shadow-lg px-4 py-3 flex flex-col items-start w-48 z-20 border border-gray-100">
            <span className="font-semibold text-gray-800 mb-1">Empowering Providers</span>
            <span className="text-xs text-gray-500">Tools for effective, patient-centered care</span>
          </div>
          {/* Floating Card 2 */}
          <div className="absolute bottom-12 right-[-70px] bg-white rounded-xl shadow-lg px-4 py-3 flex flex-col items-start w-52 z-20 border border-gray-100">
            <span className="font-semibold text-blue-600 mb-1">Transforming Care</span>
            <span className="text-xs text-gray-500">Expanding access & improving outcomes</span>
          </div>
          {/* Floating Icon Buttons */}
          <div className="absolute top-12 right-[-30px] flex flex-col gap-3 z-30">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full shadow p-2 hover:bg-blue-50 transition">
              <Image src="/facebook.png" width={20} height={20} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full shadow p-2 hover:bg-blue-50 transition">
              <Image src="/Instagram.png" width={20} height={20} alt="Instagram" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full shadow p-2 hover:bg-blue-50 transition">
              <Image src="/X.png" width={20} height={20} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShowcase; 