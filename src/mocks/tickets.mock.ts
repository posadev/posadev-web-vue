import Ticket from '@/data/Ticket.model';

const ticketMocks: Ticket[] = [
  new Ticket('Early Bird', 200, new Date(2020, 10, 10), new Date(2020, 10, 15), new URL('https://www.eventbrite.com.mx/'), true),
  new Ticket('regular', 1000, new Date(2020, 10, 10), new Date(2020, 11, 15), new URL('https://www.eventbrite.com.mx/'), true),
  new Ticket('Late Owl', 2000, new Date(2020, 10, 10), new Date(2020, 12, 15), new URL('https://www.eventbrite.com.mx/'), false)
];

export default ticketMocks;
