import React from 'react'

export default class Decider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rounds: undefined
        }
    }

    submit() {
        this.props.requests.play(this.state.p1, this.state.p2, this, this.props.roundRepo)
    }

    getHistory() {
        this.props.requests.getHistory(this, this.props.roundRepo)
    }

    invalidInput() {
        this.setState({result: "INVALID!"})
    }

    tie() {
        this.setState({result: "TIE!"})
    }

    p1Wins() {
        this.setState({result: "Player 1 Wins!"})
    }

    p2Wins() {
        this.setState({result: "Player 2 Wins!"})
    }

    onP1Change(event) {
        this.setState({p1: event.target.value})
    }

    onP2Change(event) {
        this.setState({p2: event.target.value})
    }

    noRounds() {
        this.setState({rounds: []})
    }

    rounds(newRounds) {
        this.setState({rounds: newRounds})
    }

    render () {
        return (
            <div>
                <p>{this.state.result}</p>
                <input name="p1" onChange={this.onP1Change.bind(this)} />
                <input name="p2" onChange={this.onP2Change.bind(this)} />
                <button name="play" onClick={this.submit.bind(this)}>PLAY</button>
                <button name="history" onClick={this.getHistory.bind(this)}>HISTORY</button>
                <p>{this.state.rounds !== undefined ? <History rounds={this.state.rounds}/> : ""}</p>
            </div>
        )
    }
}

class History extends React.Component {
    render() {
        const {rounds} = this.props
        if (rounds.length === 0) {
            return "no rounds"
        } else {           
            return rounds.map((round) => {
                return `${round.p1} ${round.p2} ${round.result}`
            }) 
        }
    }
}