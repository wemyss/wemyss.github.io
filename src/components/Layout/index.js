import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router';


import Header from '../Header'

import 'typeface-audiowide' // still doesnt work
import 'prismjs/themes/prism.css'
import './index.scss'

const urls_without_nav = new Set([
	'/',
	'/404/'
])

export default ({ children }) => (
	<Location>
		{({ location }) => (
			<main>
				<Helmet
					title='Sam Wemyss'
					meta={[
						{ name: 'description', content: 'Personal website for Sam Wemyss' },
						{ name: 'keywords', content: 'software developer, student, javascript, programming' },
					]}
				/>
				{urls_without_nav.has(location.pathname) ? '' : <Header title={location.pathname} />}
				{children}
			</main>
		)}
	</Location>
)
