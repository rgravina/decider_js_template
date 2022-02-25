import {render} from 'react-dom'
import React from 'react'
import Decider from '../src/decider'
import ReactTestUtils from 'react-dom/test-utils'
import { Result, Round, Throws } from '../../rps/src/decider'

let container

const setupDOM = () => {
    container = document.createElement("div")
    document.body.appendChild(container)
}

const teardown = () => {
    container.remove()
}

const renderApp = (props) => {
    render(<Decider requests={props} roundRepo={{}}/>, container)
}

const getContent = () => {
    return container.textContent
}

const submit = () => {
    document.querySelector("button[name='play']").click()
}

const getHistory = () => {
    document.querySelector("button[name='history']").click()
}

const enterTextIntoInput = (name, value) => {
    const target = document.querySelector(`[name=${name}]`)
    target.value = value
    ReactTestUtils.Simulate.change(target)
}

const alwaysInputInvalidStub = {
    play(p1, p2, observer) {
        observer.invalidInput()
    }
}

const alwaysTieStub = {
    play(p1, p2, observer) {
        observer.tie()
    }
}

const alwaysP1WinsStub = {
    play(p1, p2, observer) {
        observer.p1Wins()
    }
}

const alwaysP2WinsStub = {
    play(p1, p2, observer) {
        observer.p2Wins()
    }
}

const noRoundsStub = {
    getHistory(observer, roundRepo) {
        observer.noRounds()
    }
}

const roundsStub = {
    getHistory(observer, roundRepo) {
        observer.rounds([new Round(Throws.rock, Throws.paper, Result.p2Wins)])
    }
}

describe("play game", () => {
    beforeEach(() => {
        setupDOM()
    })

    afterEach(() => {
        teardown()
    })

    describe("invalid Input", () => {
        it("on render does not display error message", () => {
            renderApp(alwaysInputInvalidStub)
    
            expect(getContent()).not.toContain("INVALID!")
        })
        it("display app", () => {
            renderApp(alwaysInputInvalidStub)
    
            submit()
    
            expect(getContent()).toContain("INVALID!")
        })
    })

    describe("tie", () => {
        it("on render does not display tie message", () => {
            renderApp(alwaysTieStub)
    
            expect(getContent()).not.toContain("TIE!")
        })
        it("display app", () => {
            renderApp(alwaysTieStub)
    
            submit()
    
            expect(getContent()).toContain("TIE!")
        })
    })

    describe("p1 wins", () => {
        it("on render does not display p1 wins message", () => {
            renderApp(alwaysP1WinsStub)
    
            expect(getContent()).not.toContain("Player 1 Wins!")
        })
        it("display app", () => {
            renderApp(alwaysP1WinsStub)
    
            submit()
    
            expect(getContent()).toContain("Player 1 Wins!")
        })
    })

    describe("p2 wins", () => {
        it("on render does not display p2 wins message", () => {
            renderApp(alwaysP2WinsStub)
    
            expect(getContent()).not.toContain("Player 2 Wins!")
        })
        it("display app", () => {
            renderApp(alwaysP2WinsStub)
    
            submit()
    
            expect(getContent()).toContain("Player 2 Wins!")
        })
    })

    describe("submitting game", () => {
        it("sends the users input to the game module", () => {
            const requestSpy = {play: jest.fn()}

            renderApp(requestSpy)

            // input player 1 throw
            enterTextIntoInput('p1', 'rock')
            
            // input player 2 throw
            enterTextIntoInput('p2', 'scissors')

            // submit the form
            submit()

            // verify that the game module recieved inputs
            expect(requestSpy.play).toHaveBeenCalledWith("rock", "scissors", expect.anything(), expect.anything())
        })
    })
})

describe("history", () => {
    beforeEach(() => {
        setupDOM()
    })

    afterEach(() => {
        teardown()
    })

    describe("no rounds", () => {
        it("on render does not display no rounds message", () => {
            renderApp(noRoundsStub)
    
            expect(getContent()).not.toContain("no rounds")
        })

        it("displays no rounds message", () => {
            renderApp(noRoundsStub)
    
            getHistory()
    
            expect(getContent()).toContain("no rounds")
        })
    })

    describe("rounds", () => {
        it("on render does not display rounds", () => {
            renderApp(roundsStub)
    
            expect(getContent()).not.toContain("no rounds")
        })

        it("displays rounds", () => {
            renderApp(roundsStub)
    
            getHistory()
    
            expect(getContent()).toContain("rock")
            expect(getContent()).toContain("paper")
            expect(getContent()).toContain("p2Wins")
        })
    })
})
