// components/Events/Events.jsx
import eventsData from "../../api/eventsData.json";
import "./Events.css"; // ✅ Use your custom CSS

function Events() {
  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <EventsList />
    </div>
  );
}

export default Events;

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const EventsList = () => {
  const userName = "Guest";
  const is_admin = userName === "Admin";

  return (
    <div className="events-grid">
      {eventsData.map((event) => (
        <div key={event.id} className="event-card">
          <img
            src={event.image_url}
            alt={`${event.title} image`}
            className="event-image"
          />

          <h2 className="event-name">{event.title}</h2>
          <h3 className="event-organizer">Organized by: {event.organizer}</h3>
          <p className="event-description">{event.description}</p>
          <p className="event-date">📅 {formatDate(event.date)}</p>
          <p className="event-creator">👤 Created By: {userName}</p>

          {!is_admin && (
            <button
              className="register-btn"
              onClick={() => window.open(event.registration_url, "_blank")}
            >
              Register
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
