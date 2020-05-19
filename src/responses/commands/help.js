import React from 'react'


const help = () => {
	return (
		<div className='Help pr-2'>
			<h1 className='my-1 text-primary'>Hasn't being at IIIT taught you anything?</h1>
			<h1 className='text-warning'>(－‸ლ)</h1>
			<ol>
				<li>help →  Incase you need help </li>
				<li>ls →  See a list of all file names in this directory</li>
				<li>cat [filename] →  Print contents of the file to the terminal</li>
				<li>clear →  Clear the screen </li>
			</ol>
			<p>******************</p>
			<p className='text-danger'>Feel free to try out other commands you are familiar with :)</p>

		</div>

	)
}

export default help;