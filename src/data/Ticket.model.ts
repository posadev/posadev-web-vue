export default class Ticket {
  constructor(
    readonly name: string,
    readonly price: number,
    readonly start: Date,
    readonly end: Date,
    readonly url: URL
  ) {}
}
