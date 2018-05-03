import React from 'react'
import PostLink from '../components/PostLink'

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <li key={edge.node.id} className='box is-dark'><PostLink post={edge.node} /></li>)

	return (
		<div>


		<div className="hero is-warning is-bold is-medium">
			<div className="hero-body has-text-centered">
				<h1 className="title is-2">Blog posts</h1>
			</div>
		</div>
		<section className='section'>
			<div className='container' style={{ maxWidth: '980px' }}>
				<ul>{Posts}</ul>
			</div>
		</section>
		</div>
	)
}

export default BlogPage


export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { live: { eq: true } } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						blurb
						image
					}
				}
			}
		}
	}
`
