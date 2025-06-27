const EventsListCard = (props) => {
  return (
    <div key={props.event.id} className="event-card">
      <img
        src={props.event.image_url}
        alt={`${props.event.title} image`}
        className="event-image"
      />

      <h2 className="event-name">{props.event.title}</h2>
      <h3 className="event-organizer">Organized by: {props.event.organizer}</h3>
      <p className="event-description">{props.event.description}</p>
      <p className="event-date">📅 {props.formatDate(props.event.date)}</p>
      <p className="event-creator">👤 Created By: {props.userName}</p>

      {!props.is_admin && (
        <button
          className="register-btn"
          onClick={() => window.open(props.event.registration_url, "_blank")}
        >
          Register
        </button>
      )}
    </div>
  );
};

export default EventsListCard;
