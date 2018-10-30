import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

export default ({ data: { allMarkdownRemark: { edges } } }) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date)
		.map(edge => <li key={edge.node.id} className='box is-dark'><PostLink post={edge.node} /></li>)

	return (
		<Layout>
			<div className='hero is-primary is-bold is-medium'>
				<div className='hero-body has-text-centered'>
					<h1 className='title is-2'>Blog posts</h1>
				</div>
			</div>
			<section className='section'>
				<div className='container' style={{ maxWidth: '980px' }}>
					<ul>{Posts}</ul>
				</div>
			</section>
		</Layout>
	)
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { live: { eq: true } } }
		) {
			edges {
				node {
					id
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						blurb
						image {
							publicURL
							childImageSharp {
								fluid(maxWidth: 256) {
									originalImg
								}
							}
						}
					}
				}
			}
		}
	}
`
