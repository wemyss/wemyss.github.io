import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'

import './index.scss'


export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark

	return (
		<Layout>
			<div className='hero is-medium is-primary is-bold'>
				<div className='hero-body'>
					<div className='section'>
						<div className='container'>
							<h1 className='title'>{frontmatter.title}</h1>
							<h2 className='subtitle'>{frontmatter.date}</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='section'>
				<div className='container'>
					<div id='blog-post' className='content' dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`
