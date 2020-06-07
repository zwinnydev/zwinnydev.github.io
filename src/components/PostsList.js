import React, { Fragment } from 'react'

import PostsListItem from './PostsListItem'

class PostsList extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            excerpt: post.node.excerpt,
            slug: post.node.frontmatter.slug,
            timeToRead: post.node.timeToRead,
            language: post.node.frontmatter.language || 'en',
            tags: post.node.frontmatter.tags || [],
          }
          return <PostsListItem key={props.slug} {...props} />
        })}
      </Fragment>
    )
  }
}
export default PostsList
