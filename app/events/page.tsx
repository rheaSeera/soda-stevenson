import EventCard from '../../components/EventCard';

const upcoming = [
  { date: 'June 1, 2025', title: 'Campus Registration Drive', description: 'Join us at the main quad to register as organ donors and learn more from volunteers.' },
  { date: 'July 15, 2025', title: 'Transplant Recipient Talk', description: 'Hear firsthand stories from someone whose life was saved by organ donation.' },
];

export default function EventsPage() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcoming.map((e) => (
          <EventCard key={e.date} {...e} />
        ))}
      </div>
    </section>
  );
}