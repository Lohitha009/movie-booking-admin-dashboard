import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow">
      <h2 className="font-bold">Dashboard</h2>
      <ThemeToggle />
    </header>
  );
}
