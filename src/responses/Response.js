import React from 'react';

const Response = (command) => {
    if (command.match(/ls\D*/))
        return (
            <ul>
                <li>guidelines.txt</li>
                <li>teams.txt</li>
                <li>theme.txt</li>
                <li>submission.txt</li>
                <li>prizes.txt</li>
            </ul>
        )
    else
        return (<span></span>)
}

export default Response;