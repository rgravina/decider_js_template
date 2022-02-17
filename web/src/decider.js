import React from 'react'

export default class Decider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submit() {
        this.setState({result: "INVALID!"})
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