export default class TicketCard {
  constructor(
    readonly name: string,
    readonly price: number,
    readonly end: Date,
    readonly start: Date
  ) {}
}
