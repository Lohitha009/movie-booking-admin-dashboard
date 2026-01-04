export default function Notification({ type, message }) {
  if (!message) return null;

  return (
    <div
      className={`p-3 rounded mb-4 text-sm ${
        type === "success"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {message}
    </div>
  );
}
