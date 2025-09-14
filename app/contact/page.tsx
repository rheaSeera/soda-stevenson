import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-700 mb-6">
        Have questions? Reach out to our faculty or use the form below.
      </p>
      <div className="max-w-xl mx-auto">
        <p className="mb-4 text-gray-600">
          Faculty Advisor: Rhea Seeralan (<a href="rheaseeralan@gmail.com" className="text-blue-600 hover:underline">placeholder@stevenson.edu</a>)
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
