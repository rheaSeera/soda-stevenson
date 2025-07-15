import ResourceCard from '../../components/ResourceCard';

const resources = [
  { title: 'Donate Life Registry', url: 'https://donatelife.net/', description: 'Register as a donor or manage your consent.' },
  { title: 'OrganDonor.gov', url: 'https://www.organdonor.gov/', description: 'Official federal information on organ donation.' },
];

export default function ResourcesPage() {
  return (
    <section className="py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {resources.map((r) => (
          <ResourceCard key={r.url} {...r} />
        ))}
      </div>
    </section>
  );
}