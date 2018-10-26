import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { fetchPost, deletePost } from '../actions/index'

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  onDeleteClick() {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
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

        <Button
          onClick={this.onDeleteClick()}
          className="btn btn-danger pull-xs-right"
        >
          Delete
        </Button>

      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

PostsShow.propTypes = {
  history: PropTypes.instanceOf(Array).isRequired,
  fetchPost: PropTypes.func.isRequired,
  post: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
