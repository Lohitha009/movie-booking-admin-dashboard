import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import Users from "./pages/Users";
import Movies from "./pages/Movies";   // ✅ ADD THIS

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">

          {/* Topbar */}
          <Topbar />

          {/* Pages */}
          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
              <Route path="/users" element={<Users />} />
              <Route path="/movies" element={<Movies />} /> {/* ✅ ADD THIS */}
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}
