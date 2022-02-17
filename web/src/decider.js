import React from 'react'

export default class Decider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submit() {
        this.props.requests.play("", "", this)
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

    render () {
        return (
            <div>
                <p>{this.state.result}</p>
                <button onClick={this.submit.bind(this)}>PLAY</button>
            </div>
        )
    }
}