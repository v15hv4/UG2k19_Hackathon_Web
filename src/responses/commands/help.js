import React from 'react'


const help = () => {
	return(
			<div className='Help pr-2'>
				<h1 className='my-1'>List Of Important Commands</h1>
				<ol>
					<li>cat [filename] ->  Display the contents of the file</li>
					<li>clear ->  Clear the screen </li>
					<li>ls ->  See a list of all file names</li>

				</ol>
				<p>******************</p>
				<p>Feel free to try out other commands you are familiar with :)</p>

			</div>

		)
}

export default help;