import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'

import fetchPosts from '../actions/index'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    _.map(this.props.posts, post => (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    ))
  }

  render() {
    return (
      <div>
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
  posts: PropTypes.instanceOf(Array).isRequired,
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
