import React from 'react'

export default class Decider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submit() {
        this.props.requests.play(this.state.p1, this.state.p2, this)
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

    render () {
        return (
            <div>
                <p>{this.state.result}</p>
                <input name="p1" onChange={this.onP1Change.bind(this)} />
                <input name="p2" onChange={this.onP2Change.bind(this)} />
                <button onClick={this.submit.bind(this)}>PLAY</button>
            </div>
        )
    }
}