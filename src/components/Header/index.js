import React from 'react'
import Link from 'gatsby-link'
import { string } from 'prop-types'

const HeaderItem = ({ icon, title, to }) => (
		<Link to={to} className='navbar-item'>
			{icon &&
				<span className="icon has-text-white">
					<i className={icon} />
				</span>
			}
			<h2>{title}</h2>
		</Link>
)
HeaderItem.propTypes = {
	icon: string,
	title: string.isRequired,
	to: string.isRequired,
}


const Header = ({ title }) => (
	<nav className='navbar is-dark has-shadow'>
			<div className='navbar-start navbar-end navbar-brand'>
				<HeaderItem to='/' 			title='Home'/>
				<HeaderItem to='about' 	title='About'/>
				<HeaderItem to='blog' 	title='Blog'/>
			</div>
	</nav>
)
Header.propTypes = {
	title: string,
}

export default Header
