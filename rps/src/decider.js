export const Throws = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

export const Result = {
    invalid: "invalid",
    p1Wins: "p1Wins",
    p2Wins: "p2Wins",
    tie: "tie"
}

export class Round {
    constructor(p1, p2, result) {
        this.p1 = p1
        this.p2 = p2
        this.result = result
    }
}

const ThrowPattern = [Throws.rock, Throws.scissors, Throws.paper]
export default class Requests {
    play = (p1, p2, observer, roundRepo) => {
        new PlayRroundRequest(observer, p1, p2, roundRepo).play()
    }

    getHistory = (observer, roundRepo) => {
        if (roundRepo.isEmpty()) {
            observer.noRounds()
        } else {
            observer.rounds(roundRepo.getAll())
        }
    }
}

class PlayRroundRequest {
    constructor(observer, p1, p2, roundRepo) {
       this.p1 = p1
       this.p2 = p2
       this.observer = observer
       this.roundRepo = roundRepo
    }

    play = () => {
        if (this.invalidInput()) {
            this.roundRepo.save(new Round(this.p1, this.p2, Result.invalid))
            this.observer.invalidInput()
            return
        }
        
        if (this.tie()) {
            this.roundRepo.save(new Round(this.p1, this.p2, Result.tie))
            this.observer.tie()
        } else if (this.p1Wins()) {
            this.roundRepo.save(new Round(this.p1, this.p2, Result.p1Wins))
            this.observer.p1Wins()
        } else {
            this.roundRepo.save(new Round(this.p1, this.p2, Result.p2Wins))
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