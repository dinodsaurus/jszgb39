import React from "react";
const BlogPost = ({node}) => {
    const { frontmatter: post } = node;
    return (
    <div key={post.id} className="blogPost">
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
    </div>
)};

const BlogPage = ({data}) => {
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts);
    return (
        <div className="blogPage">
            <h1>Blog Page</h1>
            {posts.map(BlogPost)}
        </div>
    )
}


export const query = graphql`
 query IndexQuery {
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

export default BlogPage;