export const Throws = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

const ThrowPattern = [Throws.rock, Throws.scissors, Throws.paper]
export default class Requests {
    play = (p1, p2, observer) => {
        new PlayRroundRequest(observer, p1, p2).play()
    }

    getHistory = (observer) => {
        observer.noRounds()
    }
}

class PlayRroundRequest {
    constructor(observer, p1, p2) {
       this.p1 = p1
       this.p2 = p2
       this.observer = observer
    }

    play = () => {
        if (this.invalidInput()) {
            this.observer.invalidInput()
            return
        }
        
        if (this.tie()) {
            this.observer.tie()
        } else if (this.p1Wins()) {
            this.observer.p1Wins()
        } else {
            this.observer.p2Wins()
        }
    }

    invalidInput = () => {
        return !(ThrowPattern.includes(this.p1) && ThrowPattern.includes(this.p2))
    }

    tie = () => {
        return this.p1 === this.p2
    }
    
    p1Wins = () => {
        return this.p1 === Throws.rock && this.p2 === Throws.scissors || 
        this.p1 === Throws.scissors && this.p2 === Throws.paper || 
        this.p1 === Throws.paper && this.p2 === Throws.rock
    }
}