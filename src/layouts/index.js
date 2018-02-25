import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './fontawesome-all.js'

// Import stylesheets
import './bulma.scss'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sam Wemyss"
      meta={[
        { name: 'description', content: 'Personal website for Sam Wemyss' },
        { name: 'keywords', content: 'software developer, student, javascript, programming' },
      ]}
    />
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
