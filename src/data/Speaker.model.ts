export default class SpeakerInfo {
  constructor(
    readonly bio: string,
    readonly name: string,
    readonly photoURL: URL,
    readonly company: string
  ) {}
}
