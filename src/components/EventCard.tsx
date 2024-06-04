import css from "./EventCard.module.css"

export const EventCard = ({ event }) => (
    <div className={css.eventCard}>
        <div className={css.eventName}>{event.name}</div>
        <div>{event.description}</div>
    </div>
)
