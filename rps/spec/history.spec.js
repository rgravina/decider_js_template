import Requests, {Throws} from '../src/decider'

describe("history", () => {
    describe("no rounds", () => {
        it("when no rounds have played calls UI no rounds method", () => {
            const observer = {noRounds: jest.fn()}

            const roundRepo = {
                isEmpty: () => true
            }

            new Requests().getHistory(observer, roundRepo)
    
            expect(observer.noRounds).toHaveBeenCalled()
        })
    })

    describe("with rounds", () => {
        it("when rounds have been played calls UI rounds method with rounds", () => {
            const observer = {
                invalidInput: () => {},
                rounds: jest.fn()
            }
    
            const roundRepo = {
                isEmpty: () => false
            }
    
            let requests = new Requests()
    
            requests.play(Throws.rock, "sailboat", observer, roundRepo)
            requests.getHistory(observer, roundRepo)
    
            expect(observer.rounds).toHaveBeenCalled()
        })
    })
})