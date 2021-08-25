import React from 'react';
import PropTypes from 'prop-types';
import '../Title/Title.scss';

const Title = ({ title, type, size }) => {
  return (
    <h2 className={`title ${type}`} style={{ fontSize: `${size}px` }}>
      {title}
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Title;
