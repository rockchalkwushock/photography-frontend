import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { Field, reduxForm } from 'redux-form/es';
import { InputField } from '../../../commons';
import { fetchImageUrl } from '../actions';

@connect(
  null,
  { fetchImageUrl }
)
@reduxForm({
  form: 'imageUrl'
})
export default class ImageUrl extends Component {
  render() {
    const { handleSubmit, fetchImageUrl } = this.props; // eslint-disable-line
    return (
      <div>
        <form onSubmit={handleSubmit(fetchImageUrl)}>
          <label htmlFor="cat_img">Choose category:</label>
          <Field
            component={InputField}
            name='cat_img'
            placeholder='Category to add imageUrl.'
          />
          <label htmlFor="imageUrl">Add imageUrl:</label>
          <Field
            component={InputField}
            name='imageUrl'
            placeholder='Enter imageUrl here.'
          />
          <button type='submit'>Create</button>
        </form>
      </div>
    );
  }
}
