interface EventProps { date: string; title: string; description: string; }
export default function EventCard({ date, title, description }: EventProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{date}</p>
      <p>{description}</p>
    </div>
  );
}