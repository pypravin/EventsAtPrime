const EventsListCard = ({ event, is_admin, userName, formatDate }) => {
  console.log(event);
  const {
    id,
    title,
    organizer,
    description,
    date,
    image_url,
    registration_url,
  } = event;
  return (
    <div key={id} className="event-card">
      <img src={image_url} alt={`${title} image`} className="event-image" />

      <h2 className="event-name">{title}</h2>
      <h3 className="event-organizer">Organized by: {organizer}</h3>
      <p className="event-description">{description}</p>
      <p className="event-date">📅 {formatDate(date)}</p>
      <p className="event-creator">👤 Created By: {userName}</p>

      {!is_admin && (
        <button
          className="register-btn"
          onClick={() => window.open(registration_url, "_blank")}
        >
          Register
        </button>
      )}
    </div>
  );
};

export default EventsListCard;
