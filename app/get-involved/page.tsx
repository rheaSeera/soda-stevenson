'use client';
import ContactForm from '../../components/ContactForm';

export default function GetInvolvedPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Get Involved</h1>
      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-8">
        Fill out the form below to volunteer, suggest ideas, or become a chapter officer.
      </p>
      <ContactForm />
    </section>
  );
}