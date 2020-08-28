export default class SpeakerInfo {
  constructor(
    readonly bio: string,
    readonly speakerName: string,
    readonly photoURL: URL,
    readonly company: string
  ) {}
}
