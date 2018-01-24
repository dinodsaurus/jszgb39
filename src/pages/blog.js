import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  const { frontmatter: post } = node
  return (
    <div key={post.id} className='blogPost'>
      <h2><Link to={post.path}>{post.title}</Link></h2>
      <p>{post.excerpt}</p>
    </div>
  )
}

const BlogPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className='blogPage'>
      <h1>Blog Page</h1>
      {posts.map(BlogPost)}
    </div>
  )
}

export const query = graphql`
 query BlogPostsQuery {
   allMarkdownRemark {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMMM DD, YYYY")
           path
           excerpt
         }
       }
     }
   }
 }
`

export default BlogPage
