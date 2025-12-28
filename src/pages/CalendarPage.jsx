import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { events } from "../data/events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  return (
    <div className="p-6 bg-white rounded-xl">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
