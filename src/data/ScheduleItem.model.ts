export default class ScheduleItem {
    constructor(
    readonly end: Date,
    readonly start: Date,
    readonly kind: string,
    readonly speaker?: string[],
    readonly talk?: string[],
    readonly title?: string,
    readonly topic?: string
    ) {}
};
