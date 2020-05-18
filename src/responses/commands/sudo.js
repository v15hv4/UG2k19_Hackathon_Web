import React from 'react';

const sudo = () => {
    return (
        <div className='text-danger'>
            <p>You are not in the list of sudoers.</p>
            <p>This incident will be reported!</p>
        </div>
    )
}

export default sudo;