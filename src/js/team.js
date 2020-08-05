export default class Team {
    constructor(persons) {
        this.persons = persons;
    }

    [Symbol.iterator]() {
        this.current = 0;
        this.last = this.persons.length;

        return {
            next() {
                if (this.current < this.last) {
                    return {
                        done: false,
                        value: this.persons[this.current++]
                    };
                }
                return {
                    done: true
                };
            }
        }
    }
};