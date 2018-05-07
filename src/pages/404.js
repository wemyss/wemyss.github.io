import React from 'react'
import Link from 'gatsby-link'

import deadLink from './assets/dead-link.png'

const NotFoundPage = () => (
	<div className='section has-text-centered'>
		<div className='container'>
			<h1 className='title'>Error 404</h1>
			<figure>
				<img src={deadLink} width='404' alt='Dead Link'/>
			</figure>
			<h2 className='subtitle'>Oops... you found a dead Link</h2>
			<Link className='button is-primary' to='/'>Save And Continue</Link>
		</div>
	</div>
)

export default NotFoundPage
