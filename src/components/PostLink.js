import React from 'react'
import Link from 'gatsby-link'

import './PostLink.scss'
import testimg from '../pages/assets/128x128.png'

const PostLink = ({ post, ...rest }) => {
	console.log(post, rest)
	return (
	<Link to={post.frontmatter.path}>
		<div className='media'>
			<div className='media-left'>
				<figure className='image is-128x128 is-flex postlink-img'>
					<img src={post.frontmatter.image ? post.frontmatter.image.publicURL : testimg} alt=''/>
				</figure>
			</div>
			<div className='media-content'>
				<div className='content'>
					<h3 className='title is-5'>{post.frontmatter.title}</h3>
					<h4 className='subtitle is-6 has-text-warning'>{post.frontmatter.date}</h4>
					<span className='has-text-dark'>{post.frontmatter.blurb || ''}</span>
				</div>
			</div>
		</div>
	</Link>
)}

// TODO: proptypes

export default PostLink

