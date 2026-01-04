import { useEffect, useState } from "react";

export default function MovieForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    id: null,
    title: "",
    genre: "",
    language: "",
    price: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.genre || !form.language || !form.price) {
      setError("All fields are required");
      return;
    }

    setError("");
    onSubmit({ ...form, price: Number(form.price) });
  };

  return (
    <form className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow space-y-4"
          onSubmit={handleSubmit}>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Movie Title"
        className="w-full border p-2 rounded"
      />

      <input
        name="genre"
        value={form.genre}
        onChange={handleChange}
        placeholder="Genre"
        className="w-full border p-2 rounded"
      />

      <input
        name="language"
        value={form.language}
        onChange={handleChange}
        placeholder="Language"
        className="w-full border p-2 rounded"
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Ticket Price"
        className="w-full border p-2 rounded"
      />

      <div className="flex gap-3">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
