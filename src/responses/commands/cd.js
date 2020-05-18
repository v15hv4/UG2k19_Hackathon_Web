import React from 'react';

const cd = (dirName) => {
    if (dirName === "home" || dirName === "." || dirName === "..")
        return (<span></span>);
    else if (dirName === "guidelines.txt" || dirName === "teams.txt" || dirName === "theme.txt" || dirName === "submission.txt" || dirName === "prizes.txt")
        return (<span className='text-danger'>cd: Not a directory: {dirName}</span>)
    else
        return (<span className='text-danger'>cd: No such file or folder: {dirName} </span>)
}

export default cd;
