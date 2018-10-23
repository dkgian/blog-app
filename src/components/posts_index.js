import React, { Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import fetchPosts from '../actions/index'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    map(this.props.posts, post => (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    ))
  }

  render() {
    return (
      <div>

        <div className="d-flex bd-highlight mb-3">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>

        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

PostsIndex.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.shape({}),
}

PostsIndex.defaultProps = {
  posts: [],
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
