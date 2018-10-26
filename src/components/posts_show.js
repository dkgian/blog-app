import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost } from '../actions/index'

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost()
  }

  render() {
    const { post } = this.props

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/"> Go back </Link>

        <h2>
          Title:
          {' '}
          {post.title}
        </h2>

        <h3>
          Categories:
          {' '}
          {post.categories}
        </h3>

        <p>
          Content:
          {' '}
          {post.content}
        </p>

      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

PostsShow.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  post: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
