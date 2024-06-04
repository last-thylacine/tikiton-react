import { EventCard } from "../components/EventCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { TicketList } from "../components/TicketList"

const EVENT = {
    id: 'EVT-001',
    name: 'TON Bootcamp Tbilisi',
    description: 'Join us and enjoy good company and new technology',
    ticket_types: [{
        id: 'TTY-001',
        name: 'Standard ticket',
        description: 'One line description',
        cost: { value: 1, currency: 'TON' },
    }, {
        id: 'TTY-002',
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
                <TicketList tickets={event.ticket_types} />
            </Main>
        </div>
    )
}
