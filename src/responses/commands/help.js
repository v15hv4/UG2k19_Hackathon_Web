import React from 'react'


const help = () => {
	return(
			<div className='Help pr-2'>
				<h1 className='my-1'>List Of Commands</h1>
				<ol>
					<li>cat [filename] ->  Display the contents of the file</li>
					<li>cd [Path to Directory] -> Navigate to a directory </li>
						<ul>
							<li>cd .  ->  Stay in current directory</li>
							<li>cd .. ->  Go to parent directory</li>
							<li>cd [Directory path] ->  Go to the said directory</li>
						</ul>

					<li>clear ->  Clear the screen </li>
					<li>help ->  See a list of Commands</li>
					<li>ls ->  See a list of all file names</li>
					<li>sudo ->  Unlocks super user abilities</li>

				</ol>

			</div>

		)
}

export default help;