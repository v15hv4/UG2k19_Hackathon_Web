import React from 'react';

const cat = name => {
	if (name === 'guidelines.txt')
		return (
			<div className='Guidelines pr-2'>
				<h1 className='my-1'>Guidelines</h1>
				<ol>
					<li>Each team must contain 3 - 5 members. Kindly adhere to the limit.</li>
					<li>
						Upon registration, each team will be assigned to their specific mentor.
						<ul>
							<li>Mentors shall be there to guide the teams in their projects.</li>
							<li>By guide, it is meant that you can ask them for resources and doubts regarding the project itself, but asking them blatantly for help (Eg. in your codes) will not be entertained. Mentors are currently pursuing internships/projects so they will not always be free, but will be very helpful in giving guidelines.</li>
						</ul>
					</li>
					<li>You are required to issue your first Pull Request by 1155 hours on 23 May. This is done so as to keep a check on the teams.</li>
					<li>Copy-Paste of code is allowed, if code is redistributable. On doing so, you must cite them.</li>
					<li>The coding round would end at 2000 hours on 24 May. Before This, make sure to merge your fork with the main repository in the organization <a href="https://github.com/HackathonUG2k19">github.com/HackathonUG2k19</a>. The last PR before 8 pm on 24 May will be considered.</li>
					<li>The team is reqired to give a maximum of a 10 minute presentation on their respective projects, which shall be judged. This will be on a pl	atform like Zoom or  Microsoft teams.</li>
					<li>Apart From this feel free to join :
						<a className='d-block' href='/' onClick={(e) => e.preventDefault()}>OSDG Discord Link - To Be Announced</a>
						<a className='d-block' href='https://discord.com/invite/gMB2cJR'>Hackathon server discord link</a>
					</li>
				</ol>
			</div >
		)
	else if (name === 'theme.txt')
		return (
			<div className='Theme pr-2'>
				<h1 className='my-1'>Theme</h1>
				<p>The theme is "Life @ IIIT-H" and it reflects everything about IIIT! Feel free to make a software to optimize cab sharing, or to track debts in JC, a Tinder to find roommates or anything cool!
				The important thing to realize is how you can use any language to build cool things to solve real world problems.
				You can use basic skills to build clever solutions like:</p>
				<div>
					<ul className='sublist'>
						<li>A graph-based solution to optimize debts like splitwise.</li>
						<li>Accounting for internships/GSOC/DASA to make them pay more.</li>
						<li>An OJ test-case generator, but generalized for any parameter.</li>
						<li>A food app for David.</li>
					</ul>
				</div>
				<p>These are just examples of the numerous ideas you can build upon. The goal is to enjoy and learn in the process,<br /> and then give and recieve feedback from the other teams.</p>
			</div>
		)

	else if (name === 'teams.txt')
		return (
			<div className='Teams pr-2'>
				<h1 className='my-1'>Teams</h1>
				<p>
					Form teams of 3-5 members, and fill in the form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjwiimXOQOpdp2gkO_lOzjHvOsB2cFs-Q_2Lw4XiBPLVnsIQ/viewform"> Hackathon Registration</a><br />
					Try to prioritize similar technologies, and work together to make something cool.
				</p>
			</div>
		)

	else if (name === 'submission.txt')
		return (
			<div className='Submission'>
				<h1 className='my-1'>Submission</h1>
				<p>
					Each team will get a repository in this organization and we recommend working on another working fork in your own account.
					You can always merge the two repos in form of a PR, and only the team leader will be able to do this. This should have a
					"Readme.md" file that should be the primary thing that will be presented in the Presentation phase. Further details will be
					conveyed
				</p>
			</div>
		)

	else if (name === 'prizes.txt')
		return (
			<div className='Prizes'>
				<h1 className='my-1'>Prizes</h1>
				<p>
					The real treasure is the friends and skills you learnt on the way! Lmao not really..<br />
						Here are some prizes you could win :</p>
				<ul>
					<li>Awesome T-Shirts by E-Cell</li>
					<li>Amazing projects to include in your resume</li>
				</ul>
			</div>
		)
	else if (name === 'mentors.txt')
		return (
			<div className='Mentors'>
				<h1 className='my-1'>Mentors</h1>
				<p>
					Here are the awesome seniors who volunteered to be mentors:
				</p>
				<ul>
					<li>Manan Goel</li>
					<li>Istasis Mishra</li>
					<li>Devansh Manu</li>
					<li>Mallika Subramaniam</li>
					<li>Shraddha Sehgal</li>
					<li>Aashna Jena</li>
					<li>Saujas Vadhguru</li>
					<li>Yoogottam Khandelwal</li>
					<li>Abhinav Gupta</li>
				</ul>
				<p>Thanks a lot guys! You're the best!</p>
			</div>
		)

	else
		return (
			<span className='text-danger'>cat: {name}: No such file<br />
				or directory </span>
		)
}

export default cat;
