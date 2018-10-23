import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ControlLabel, Button, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions/index'

import validate from './validate'

class PostsNew extends React.Component {
  onSubmit(values) {
    this.props.createPost(values)
  }

  renderField(field) {
    const {
      meta: {
        touched,
        error,
      },
      label,
    } = field

    return (
      <div className="form-group">
        <ControlLabel>
          {label}
        </ControlLabel>

        <input
          type="text"
          className="form-control"
          {...field.input}
        />

        <div style={{ color: 'orange' }}>
          {touched ? error : '' }
        </div>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <PageHeader>
          Create a new post
        </PageHeader>

        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />

        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />

        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />

        <Button
          bsStyle="primary"
          type="submit"
        >
          Submit
        </Button>
        &nbsp;
        <Link to="/" className="btn btn-warning">Cancel</Link>

      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  validate,
})(
  connect(null, { createPost })(PostsNew)
)
