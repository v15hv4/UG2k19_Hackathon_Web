import React from 'react';

const Response = (command) => {
    if (command.match(/^ls\D*/))
        return (
            <ul className='p-0'>
                <li className='d-inline mx-3'>guidelines.txt</li>
                <li className='d-inline mx-3'>teams.txt</li>
                <li className='d-inline mx-3'>theme.txt</li>
                <li className='d-inline mx-3'>submission.txt</li>
                <li className='d-inline mx-3'>prizes.txt</li>
            </ul>
        )
    else if (command.match(/^cat\D*/)) {
        const fileName = command.split(' ')[1];
        return (
            <span className='text-danger'>cat: {fileName}: No such file or directory</span>
        )
    }
    else
        return (<span className='text-danger'>Command Not Found: {command.split(' ')[0]}</span>)
}

export default Response;