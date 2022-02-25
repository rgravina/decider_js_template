export default class FakeRoundRepo {
    constructor() {
        this.rounds = []
    }

    save(round) {
        this.rounds.push(round)
    }

    getAll() {
        return this.rounds
    }

    isEmpty() {
        return this.rounds.length === 0
    }
}