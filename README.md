# Website for HackathonUG2k19

## To get started:
Make sure you have `node` and `npm` installed. Then clone the repo, `cd` into the directory and run:
```
npm install
npm start
```

This should spin up the local development server.


## Adding a command:
Lets take an example. We want to add a command, that says "BOOMER" whenever you use the command "ok".

First, head over to `src/responses/commands` and make a JS file with the same name as your command. In this case `ok.js`

Inside `ok.js`, write a fuction that returns the JSX you want rendered as a response to the command. In this case it is just:

```
import React from 'react';

const ok = () => {
    return (<span>BOOMER</span]>)
}

export default ok;
```

Remember to import React or the JSX won't work.

Lastly, head over to `src/response/Response.js`, import this function, and add an `else if` condition that matches the command.
In this case we add the following lines:
```
import ok from './commands/ok';
```
At the top, with all the imports, and
```
else if(command === "ok")
    return ok();
```
Just above the else inside the `Response()` function.

Make sure to test if the command works before making a commit.