'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="/SODAHome.jpg"
        alt="Students at SODA event"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Join Stevenson SODA</h1>
        <p className="text-lg mb-6 max-w-xl text-center">
          Empowering students to advocate for organ, eye, and tissue donation through education and registration drives.
        </p>
        <Link href="/get-involved">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl">
            Get Involved
          </button>
        </Link>
      </div>
    </div>
  );
}