// components/Events/Events.jsx
import eventsData from "../../api/eventsData.json";
import "./Events.css"; // ✅ Use your custom CSS
import EventsListCard from "./EventsListCard";
function Events() {
  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <EventsList />
    </div>
  );
}

export default Events;

const EventsList = () => {
  const userName = "Guest";
  const is_admin = userName === "Admin";
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <ul className="events-grid">
      {eventsData.map((event) => {
        return (
          <EventsListCard
            key={event.id}
            event={event}
            is_admin={is_admin}
            userName={userName}
            formatDate={formatDate}
          />
        );
      })}
    </ul>
  );
};
