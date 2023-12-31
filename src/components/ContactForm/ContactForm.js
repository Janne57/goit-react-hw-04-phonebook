import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

const ContactForm = ({onSubmit}) => {

const [name, setName] = useState('');
const [number, setNumber ] = useState('');

 const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

          default: return;  
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
   
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  
    return (
      <form className={css.form__basic} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit" className={css.form__button}>
          Add
        </button>
      </form>
    );
  
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


