import { EventCard } from "../components/EventCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { TicketList } from "../components/TicketList"

const EVENT = {
    name: 'TON Bootcamp Tbilisi',
    description: 'Join us and enjoy good company and new technology',
    tickets: [{
        name: 'Standard ticket',
        description: 'One line description',
        cost: { value: 1, currency: 'TON' },
    }, {
        name: 'VIP ticket',
        description: 'One line description',
        cost: { value: 5, currency: 'TON' },
    }],
}

export const UserTicketView = () => {
    const event = EVENT
    return (
        <div>
            <Header/>
            <Main>
                <EventCard event={event} />
                <TicketList tickets={event.tickets} />
            </Main>
        </div>
    )
}
