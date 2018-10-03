export default function validate(values) {
  const errors = {}

  if (!values.title || values.title.length < 5 || values.title.length > 50) {
    errors.title = 'Please enter a title (at least 5 characters and maximum 50 characters)'
  }
  if (!values.categories) {
    errors.categories = 'Please enter category/categories'
  }
  if (!values.content) {
    errors.content = 'Please enter post content'
  }

  return errors
}
