import PropTypes from 'prop-types';
import React from 'react';
import './Container.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
