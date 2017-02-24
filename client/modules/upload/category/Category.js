import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { Field, reduxForm } from 'redux-form/es';
import { InputField } from '../../../commons';
import { fetchCategory } from '../actions';

@connect(
  null,
  { fetchCategory }
)
@reduxForm({
  form: 'category'
})
export default class Category extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(fetchCategory)}>
          <label htmlFor="category">Category</label>
          <Field
            component={InputField}
            name='category'
            placeholder='Enter category name here.'
          />
          <button type='submit'>Create</button>
        </form>
      </div>
    );
  }
}
