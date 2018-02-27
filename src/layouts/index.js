import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './fontawesome-all.js'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="Sam Wemyss"
      meta={[
        { name: 'description', content: 'Personal website for Sam Wemyss' },
        { name: 'keywords', content: 'software developer, student, javascript, programming' },
      ]}
    />
    {children()}
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
