import { useStore } from "../store"

import css from "./EventCard.module.css"

export const EventCard = () => {
    const event = useStore(state => state.events[state.event])
    return (
        <div className={css.eventCard}>
            <div className={css.eventName}>{event.name}</div>
            <div>{event.description}</div>
        </div>
    )
}
