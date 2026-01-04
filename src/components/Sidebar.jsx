import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  CalendarDays,
  KanbanSquare,
  Users,
  Film
} from "lucide-react";

const MENU_ITEMS = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Analytics", path: "/analytics", icon: BarChart3 },
  { label: "Calendar", path: "/calendar", icon: CalendarDays },
  { label: "Kanban", path: "/kanban", icon: KanbanSquare },
  { label: "Movies", path: "/movies", icon: Film },   // ✅ ADDED
  { label: "Users", path: "/users", icon: Users }
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-gray-300 flex flex-col">

      {/* Logo / Brand */}
      <div className="px-6 py-5 text-2xl font-bold text-white tracking-wide border-b border-gray-800">
        🎬 MovieBooking
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {MENU_ITEMS.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
               ${
                 isActive
                   ? "bg-indigo-600 text-white shadow-md"
                   : "hover:bg-gray-800 hover:text-white"
               }`
            }
          >
            <Icon size={20} />
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 text-xs text-gray-400 border-t border-gray-800">
        © 2025 MovieAdmin
      </div>
    </aside>
  );
}
