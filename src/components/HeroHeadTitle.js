import React from 'react'
import { string } from 'prop-types'

const HeroHeadTitle = ({ title }) => (
	<div className='hero-head has-text-centered'>
		<h2 className='title is-2'><br/>{title}</h2>
	</div>
)

HeroHeadTitle.propTypes = {
	title: string,
}

export default HeroHeadTitle
