import { Round, Throws } from '../src/decider'

export const roundRepositoryContract = (factory) => {
    describe("isEmpty", () => {
        it("when no rounds have played", () => {
            const repo = factory()
    
            expect(repo.isEmpty()).toEqual(true)
        })
    
        it("when rounds have played", () => {
            const repo = factory()
    
            repo.save(new Round(Throws.rock, "sailboat", "invalid"))
    
            expect(repo.isEmpty()).toEqual(false)
        })
    })
    
    describe("save", () => {
        it("saves rounds", () => {
            const repo = factory()
            let round = new Round(Throws.rock, "sailboat", "invalid")
            expect(repo.getAll()).toEqual([])
            repo.save(round)
            expect(repo.getAll()).toEqual([round])
        })
    })
}