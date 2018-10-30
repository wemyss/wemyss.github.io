import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './index.scss'

// has to be in this file for some reason....
library.add(faEnvelope, faGithub, faLinkedin)

const contactsList = [
	{
		href: '//au.linkedin.com/in/samwemyss',
		title: 'Check out my LinkedIn',
		icon: ['fab', 'linkedin'],
	},
	{
		href: '//github.com/wemyss',
		title: 'Follow me on GitHub',
		icon: ['fab', 'github'],
	},
	{
		href: 'mailto:samuel.wemyss@gmail.com',
		title: 'Send me an email',
		icon: ['far', 'envelope'],
	},
]

export const ContactUrls = ({ className }) =>
	contactsList.map(({ href, title, icon }, index) =>
		<a href={href} key={index}>
			<span className={`icon is-large ${className}`.trim()}>
				<FontAwesomeIcon icon={icon} size='2x' title={title} />
			</span>
		</a>
	)

const Contact = () => (
	<footer className='hero is-dark'>
		<div className='hero-body'>
			<div className='has-text-centered'>
				<div className='container is-vh-centered icon-bar'>
					<ContactUrls />
				</div>
			</div>
		</div>
	</footer>
)

export default Contact
