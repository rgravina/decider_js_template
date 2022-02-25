import Requests from '../src/decider'

describe("history", () => {
    it("when no rounds have played calls UI no rounds method", () => {
        const observer = {noRounds: jest.fn()}

        new Requests().getHistory(observer)

        expect(observer.noRounds).toHaveBeenCalled()
    })
})