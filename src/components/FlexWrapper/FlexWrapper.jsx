import React from 'react';
import PropTypes from 'prop-types';
import '../FlexWrapper/FlexWrapper.scss';

const FlexWrapper = ({ children }) => (
  <div className="flexWrapper">{children}</div>
);

FlexWrapper.propTypes = {
  children: PropTypes.node,
};

export default FlexWrapper;
