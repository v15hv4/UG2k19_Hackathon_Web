import React from 'react';

const sudo = () => {
    return (
        <div>
            <div className='text-warning'>
                <p>We trust you have received the usual lecture from the local System Administrator. It usually boils down to these three things:</p>
                <ul className='sudo-list'>
                    <li>#1) Respect the privacy of others.</li>
                    <li>#2) Think before you type.</li>
                    <li>#3) With great power comes great responsibility.</li>
                </ul>
            </div>
            <div className='text-danger'>
                <p>You are not in the list of sudoers.</p>
                <p>We'll tell Apex about this!</p>
                <p className='custom-message'>Note from the Developers: We're Not Comfortable</p>
            </div>
        </div>
    )
}

export default sudo;
