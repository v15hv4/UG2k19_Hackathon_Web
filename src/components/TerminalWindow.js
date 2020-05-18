import React from 'react'

import Taskbar from './Taskbar'
import CLI from './CLI'

const TerminalWindow = () => {
    return (
        <div className='TerminalWindow container mt-5 px-0'>
            <Taskbar />
            <CLI />
        </div>
    )
}

export default TerminalWindow
