import Hero from '../components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We educate, advocate, and register students as donors to save and improve lives.
        </p>
      </section>
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/about', label: 'About' },
            { href: '/events', label: 'Events' },
            { href: '/resources', label: 'Resources' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{link.label}</h3>
              <p className="text-gray-600">Learn more about {link.label.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}