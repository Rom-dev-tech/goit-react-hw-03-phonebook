import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaPhone } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../icons/delete.svg';
import '../ContactsList/ContactsList.scss';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ id, name, number }) => (
      <li className="contacts__item" key={id}>
        <a className="contacts__link" href="tel:{number}">
          <p className="contacts__name">
            <IconContext.Provider value={{ className: 'react__icons--user' }}>
              <FaUser />
            </IconContext.Provider>
            {name}
          </p>

          <p className="contacts__number">
            <IconContext.Provider value={{ className: 'react__icons--phone' }}>
              <FaPhone />
            </IconContext.Provider>
            {number}
          </p>
        </a>

        <IconButton
          onClick={() => onDeleteContact(id)}
          aria-label="delete contact"
        >
          <AddIcon width="30" height="30" fill="red" />
        </IconButton>

        {/* <button
          type="button"
          className="delete__btn"
          onClick={() => onDeleteContact(id)}
        >
          delete
        </button> */}
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
