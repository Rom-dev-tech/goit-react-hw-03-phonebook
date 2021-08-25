import React from 'react';
import PropTypes from 'prop-types';
import '../ContactsFomr/ContactsFomr.scss';

const Filter = ({ value, onChange }) => (
  <label className="form__label">
    <span className="form__name">Find contacts by name</span>
    <input
      className="form__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
