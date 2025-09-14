import ResourceCard from '../../components/ResourceCard';

const resources = [
  { title: 'Donate Life Registry', url: 'https://donatelife.net/', description: 'Register as a donor or manage your consent.' },
  { title: 'OrganDonor.gov', url: 'https://www.organdonor.gov/', description: 'Official federal information on organ donation.' },
  { 
  title: 'SODA Executive Board Application', 
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSdy6lvfRXlHa0a_eqta2WorTPJTMu9r0HndYatquVy-dBlEMw/closedform', 
  description: 'Apply to join the SODA Stevenson Executive Board.' 
},
{ 
  title: 'Register as a Donor – SODA at Stevenson High School', 
  url: 'https://registerme.org/campaign/sodastevensonhs', 
  description: 'Sign up through the Donate Life registry and support our Stevenson HS campaign.' 
},
{ 
  title: 'Stevenson SODA Volunteer Form', 
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSeVQmzXfT0uUZwgXNWqKf8IOcrwi7EwTOogdID4eom92k7TIA/viewform', 
  description: 'Get involved with SODA Stevenson as a volunteer.' 
},
{ 
  title: 'Stevenson SODA Instagram', 
  url: 'https://www.instagram.com/stevensonsoda/?hl=en', 
  description: 'Follow us on Instagram for updates, events, and stories.' 
},
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
