import React from 'react'

export default class Decider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <p>{this.state.result}</p>
                <button onClick={() => {
                    this.setState({result: "INVALID!"})
                }}>PLAY</button>
            </div>
        )
    }
}