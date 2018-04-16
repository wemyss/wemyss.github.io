import React from 'react'

import './Contact.scss'

const urls = {
	linkedin: 'https://au.linkedin.com/in/samwemyss',
	github: 'https://github.com/wemyss',
}

const Contact = () => (
	<footer className='hero is-dark'>
		<div className='hero-body'>
			<div className='has-text-centered'>
				<div className='container is-vh-centered icon-bar'>
						<a href='mailto:samuel.wemyss@gmail.com'>
						<span className='icon is-large'>
							 <i className='fas fa-envelope fa-2x'></i>
						</span>
						</a>
						<a href={urls.github}>
							 <span className='icon is-large'>
									<i className='fab fa-github fa-2x'></i>
							 </span>
						</a>
						<a href={urls.linkedin}>
							 <span className='icon is-large'>
									<i className='fab fa-linkedin fa-2x'></i>
							 </span>
						</a>
				</div>
			</div>
		</div>
	</footer>
)

export default Contact
