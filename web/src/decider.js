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

    render () {
        return (
            <div>
                <p>{this.state.result}</p>
                <button onClick={this.submit.bind(this)}>PLAY</button>
            </div>
        )
    }
}