import React from 'react'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ data, location }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title } = frontmatter
  return (
    <div>
      <Helmet
        title={`${title} - jsZgb#39`}
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
 query BlogPostByPath($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html 
     frontmatter {
       title
       date(formatString: "MMMM, DD, YYYY")
       path
       excerpt
     }
   }
 }
`

export default TemplateWrapper
