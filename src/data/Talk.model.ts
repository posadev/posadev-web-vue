export default class Talk {
  constructor(
    readonly name: string,
    readonly speaker: string,
    readonly room: string,
    readonly description: string,
    readonly language: string,
    readonly level: string,
    readonly schedule: string,
    readonly tags: string[],
    readonly track: string
  ) {}
}
