import Requests, {Throws} from '../src/decider'

describe("rps", () => {
    describe("p1 wins", () => {
        it("rock vs scissors", () => {
            const observer = {p1Wins: jest.fn()}

            new Requests().play(Throws.rock, Throws.scissors, observer)
    
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it("scissors vs paper", () => {
            const observer = {p1Wins: jest.fn()}

            new Requests().play(Throws.scissors, Throws.paper, observer)
            
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it("paper vs rock", () => {
            const observer = {p1Wins: jest.fn()}

            new Requests().play(Throws.paper, Throws.rock, observer)
            
            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })

    describe("p2 wins", () => {
        it("scissors vs rock", () => {
            const observer = {p2Wins: jest.fn()}

            new Requests().play(Throws.scissors, Throws.rock, observer)
            
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it("paper vs scissors", () => {
            const observer = {p2Wins: jest.fn()}
            
            new Requests().play(Throws.paper, Throws.scissors, observer)
            
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it("rock vs paper", () => {
            const observer = {p2Wins: jest.fn()}
            
            new Requests().play(Throws.rock, Throws.paper, observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe("tie", () => {
        it("rock vs rock", () => {
            const observer = {tie: jest.fn()}

            new Requests().play(Throws.rock, Throws.rock, observer)
            
            expect(observer.tie).toHaveBeenCalled()
        })
    
        it("paper vs paper", () => {
            const observer = {tie: jest.fn()}

            new Requests().play(Throws.paper, Throws.paper, observer)

            expect(observer.tie).toHaveBeenCalled()
        })
    
        it("scissors vs scissors", () => {
            const observer = {tie: jest.fn()}

            new Requests().play(Throws.scissors, Throws.scissors, observer)

            expect(observer.tie).toHaveBeenCalled()
        })
    })

    describe("invalid input", () => {
        it("scissors vs sailboat", () => {
            const observer = {invalidInput: jest.fn()}

            new Requests().play(Throws.scissors, "sailboat", observer)

            expect(observer.invalidInput).toHaveBeenCalled()
        })
    
        it("sailboat vs scissors", () => {
            const observer = {invalidInput: jest.fn()}

            new Requests().play("sailboat", Throws.scissors, observer)

            expect(observer.invalidInput).toHaveBeenCalled()
        })
    })

})