import Requests, {Throws, Round, Result} from '../src/decider'
import FakeRoundRepo from './FakeRoundRepo'

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
                tie: () => {},
                p1Wins: () => {},
                p2Wins: () => {},
                tie: () => {},
                rounds: jest.fn()
            }
            
            let rounds = [
                new Round(Throws.rock, "sailboat",  Result.invalid),
                new Round(Throws.rock, Throws.rock, Result.tie),
                new Round(Throws.rock, Throws.scissors, Result.p1Wins),
                new Round(Throws.rock, Throws.paper, Result.p2Wins),
            ]

            const roundRepo = new FakeRoundRepo()
    
            let requests = new Requests()
    
            requests.play(Throws.rock, "sailboat", observer, roundRepo)
            requests.play(Throws.rock,  Throws.rock, observer, roundRepo)
            requests.play(Throws.rock,  Throws.scissors, observer, roundRepo)
            requests.play(Throws.rock,  Throws.paper, observer, roundRepo)
            requests.getHistory(observer, roundRepo)
    
            expect(observer.rounds).toHaveBeenCalledWith(rounds)
        })
    })
})

