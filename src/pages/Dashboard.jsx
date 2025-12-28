import StatCard from "../components/StatCard";
import { Users, Ticket, IndianRupee } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Users" value="12,450" icon={Users} />
      <StatCard title="Tickets" value="8,230" icon={Ticket} />
      <StatCard title="Revenue" value="₹4.8L" icon={IndianRupee} />
    </div>
  );
}
