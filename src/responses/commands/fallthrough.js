import React from 'react';

const fallthrough = (command) => {
    return (
        <div>
            <span className='text-danger'>Command Not Found: {command}</span>
            <p className='text-warning'>Try 'help' if you're stuck</p>
        </div>
    )
}

export default fallthrough;