import React from 'react';
import PropTypes from 'prop-types';

const Сounter = ({ title, totalContactsCount }) => {
  return (
    <p>
      {title} {totalContactsCount}
    </p>
  );
};

Сounter.propTypes = {
  title: PropTypes.string.isRequired,
  totalContactsCount: PropTypes.number,
};

export default Сounter;
