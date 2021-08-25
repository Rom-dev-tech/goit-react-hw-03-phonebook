import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, size }) => {
  return (
    <h1 className="main__title" style={{ fontSize: `${size}px` }}>
      {title}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Title;
