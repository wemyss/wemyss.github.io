import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './assets/fontawesome-all.js'
import './assets/audiowide.css'
import './index.scss'

const TemplateWrapper = ({ location, children }) => (
	<main>
		<Helmet
			title="Sam Wemyss"
			meta={[
				{ name: 'description', content: 'Personal website for Sam Wemyss' },
				{ name: 'keywords', content: 'software developer, student, javascript, programming' },
			]}
		/>
		{location.pathname !== '/' ? <Header title={location.pathname} /> : ''}
		{children()}
	</main>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
