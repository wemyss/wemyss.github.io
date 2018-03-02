import React from 'react'
import PostLink from '../components/PostLink'

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <li className="box"><PostLink key={edge.node.id} post={edge.node} /></li>)

	return (
		<main className="section">
			<div className="container">
				<h1 className="title">Posts</h1>
				<ul>
					{Posts}
				</ul>
			</div>
		</main>
	)
}

export default BlogPage


export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
				}
			}
		}
	}
`
