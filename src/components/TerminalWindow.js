import React from 'react';

import Taskbar from './Taskbar';
import CLI from './CLI';

const TerminalWindow = () => {
    return (
        <div className='TerminalWindow container-fluid m-0 p-0'>
            <div className="pt-5 d-none d-sm-block d-md-block d-lg-block">&nbsp;</div>
            <Taskbar />
            <CLI />
        </div>
    )
}

export default TerminalWindow;
