import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const IndexPage = () => (
	<section className="homepage">
		{/* Name and title */}
		<div className="has-text-centered has-text-right-tablet header">
			<h1 className="title is-size-2-tablet has-text-white-bis">
				Sam Wemyss
			</h1>
			<p className="subtitle is-7 is-size-6-tablet has-text-grey-lighter">
				SOFTWARE ENGINEER
			</p>
		</div>

		{/* Site links */}
		<nav className="site-links has-text-centered has-text-right-tablet">
			<ul>
				<li>
					<Link className="has-text-grey-lighter" to="about">About</Link>
				</li>
				<li>
					<Link className="has-text-grey-lighter" to="blog">Blog</Link>
				</li>
			</ul>
		</nav>

		{/* Social media */}
		<footer className="social has-text-centered">
			<a href="https://au.linkedin.com/in/samwemyss">
				<span className="icon is-hoverable is-large has-text-white-bis">
					<i className="fab fa-2x fa-linkedin" title="Check out my LinkedIn"></i>
				</span>
			</a>
			<a href="https://github.com/wemyss">
				<span className="icon is-hoverable is-large has-text-white-bis">
					<i className="fab fa-2x fa-github" title="Follow me on GitHub"></i>
				</span>
			</a>
			<a href="mailto:samuel.wemyss@gmail.com">
				<span className="icon is-hoverable is-large has-text-white-bis">
						<i className="far fa-2x fa-envelope" title="Send me an email"></i>
				</span>
			</a>
		</footer>
	</section>
)

export default IndexPage
