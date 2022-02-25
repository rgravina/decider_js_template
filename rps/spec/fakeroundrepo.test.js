import { Round, Throws } from '../src/decider'
import FakeRoundRepo from './FakeRoundRepo'

describe("fake round repo", () => {
    describe("isEmpty", () => {
        it("when no rounds have played", () => {
            const repo = new FakeRoundRepo()

            expect(repo.isEmpty()).toBeTrue()
        })

        it("when rounds have played", () => {
            const repo = new FakeRoundRepo()

            repo.save(new Round(Throws.rock, "sailboat", "invalid"))

            expect(repo.isEmpty()).toBeFalse()
        })
    })

    describe("save", () => {
        it("saves rounds", () => {
            const repo = new FakeRoundRepo()
            let round = new Round(Throws.rock, "sailboat", "invalid")
            expect(repo.getAll()).toEqual([])
            repo.save(round)
            expect(repo.getAll()).toEqual([round])
        })
    })
})

