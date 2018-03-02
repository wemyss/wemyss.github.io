import React from 'react'
import Link from 'gatsby-link'

import testimg from '../pages/assets/128x128.png'

const PostLink = ({ post }) => (
	<Link to={post.frontmatter.path}>
		<div className="media">
			<div className="media-left">
				<figure className="image is-128x128">
					<img src={testimg} alt=""/>
				</figure>
			</div>
			<div className="media-content">
				<div className="content">
					<h3 className="title is-5">{post.frontmatter.title}</h3>
					<h4 className="subtitle is-6 has-text-primary">{post.frontmatter.date}</h4>
					<span className="has-text-dark">A short little blurb about what this post is enticing the user to click on it.</span>
				</div>
			</div>
		</div>
	</Link>
)

// TODO: proptypes

export default PostLink

