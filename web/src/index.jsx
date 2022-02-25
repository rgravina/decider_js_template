import React from 'react'
import ReactDOM from 'react-dom'
import Decider from './decider'
import DeciderModule from '../../rps/src/decider'
import RoundRepository from '../../rps/src/RoundRepository'

ReactDOM.render(
    <Decider requests={new DeciderModule()} roundRepo={new RoundRepository()}/>,
    document.querySelector('#app')
)