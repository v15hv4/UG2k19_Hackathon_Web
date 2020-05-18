import React from 'react';

import ls from './commands/ls';
import sudo from './commands/sudo';
import clear from './commands/clear';
import cat from './commands/cat'

const Response = (command) => {
    if (command.match(/^sudo\D*/))
        return sudo();
    else if (command.match(/^ls\D*/))
        return ls();
    // Waiting on Mehul
    else if (command.match(/^cat\D*/)) {
        const fileName = command.split(' ')[1];
        return cat(filename);
    }
    else if (command === "clear")
        return clear();
    else
        return (<span className='text-danger'>Command Not Found: {command.split(' ')[0]}</span>)
}

export default Response;