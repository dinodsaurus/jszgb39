import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  componentDidMount() {
    console.log("mounted");
    this.didRender();
  }
  didRender() {
    console.log("rendered");
  }
render() {
  return(
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)
}
}
export default IndexPage
