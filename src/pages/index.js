import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/Layout'
import { ContactUrls } from '../components/Contact'

import './index.scss'

export default () => (
	<Layout>
		<section className='homepage'>
			{/* Name and title */}
			<div className='has-text-centered has-text-right-tablet header'>
				<h1 className='title is-size-2-tablet has-text-white-bis'>
					Sam Wemyss
				</h1>
				<p className='subtitle is-7 is-size-6-tablet has-text-grey-lighter'>
					SOFTWARE ENGINEER
				</p>
			</div>

			{/* Site links */}
			<nav className='site-links has-text-centered has-text-right-tablet'>
				<ul>
					<li>
						<Link className='has-text-grey-lighter' to='/about'>About</Link>
					</li>
					<li>
						<Link className='has-text-grey-lighter' to='/blog'>Blog</Link>
					</li>
				</ul>
			</nav>

			{/* Social media */}
			<footer className='social has-text-centered'>
				<ContactUrls className='is-hoverable has-text-white-bis' />
			</footer>
		</section>
	</Layout>
)
