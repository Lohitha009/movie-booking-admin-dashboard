export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow flex gap-4">
      <Icon className="text-indigo-500" />
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
