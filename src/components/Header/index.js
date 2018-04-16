import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
	<nav className="navbar is-dark has-shadow">
		<div className="navbar-brand">
			<Link to="/" className="navbar-item">
				<span className="icon has-text-white">
					<i className="fas fa-home" alt="Take me home"></i>
				</span>
			</Link>
		</div>
		<div className="navbar-menu">
			<div className="navbar-end">
				<Link to="about" className="navbar-item">
					About
				</Link>
				<Link to="blog" className="navbar-item">
					Blog
				</Link>
			</div>
		</div>
	</nav>
)

Header.propTypes = {
	title: PropTypes.string,
}

export default Header
