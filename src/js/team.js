export default class Team {
    constructor(persons) {
        this.persons = persons;
    }

    *[Symbol.iterator]() {
        for (const person of this.persons) {
            yield person;
        }
    }
}