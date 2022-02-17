import React from 'react'
import ReactDOM from 'react-dom'
import Decider from './decider'
import DeciderModule from '../../rps/src/decider'

ReactDOM.render(
    <Decider requests={new DeciderModule()}/>,
    document.querySelector('#app')
)