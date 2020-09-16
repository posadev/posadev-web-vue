export default class Ticket {
  constructor(
    readonly name: string,
    readonly price: number | string,
    readonly start: Date,
    readonly end: Date,
    readonly url: URL,
    readonly enabled: boolean
  ) {}
}
