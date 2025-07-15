interface ResourceProps { title: string; url: string; description: string; }
export default function ResourceCard({ title, url, description }: ResourceProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-white shadow rounded-lg p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </a>
  );
}