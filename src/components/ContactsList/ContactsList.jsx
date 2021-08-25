import React from 'react';
import PropTypes from 'prop-types';
import '../ContactsList/ContactsList.scss';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ id, name, number }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__text">
          {name}: {number}
        </p>

        <button
          type="button"
          className="delete__btn"
          onClick={() => onDeleteContact(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
