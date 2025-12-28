import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 260000 },
  { month: "Apr", revenue: 310000 },
  { month: "May", revenue: 420000 }
];

const ticketsData = [
  { name: "Action", value: 400 },
  { name: "Drama", value: 300 },
  { name: "Comedy", value: 200 },
  { name: "Sci-Fi", value: 100 }
];

const usersData = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 200 },
  { day: "Wed", users: 150 },
  { day: "Thu", users: 300 },
  { day: "Fri", users: 450 }
];

const COLORS = ["#6366F1", "#22C55E", "#F97316", "#EF4444"];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics Overview</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Revenue Line Chart */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366F1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Ticket Distribution Pie */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Tickets by Genre</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ticketsData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
              >
                {ticketsData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow lg:col-span-2">
          <h2 className="font-semibold mb-4">Daily Active Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usersData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
