import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../../redux/contacts/contactsOperation';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ edit, setEdit ] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleClickEdit = () =>{
    setName(filteredContact.name);
    setNumber(filteredContact.number);
    setEdit(true);
  }

  const handleUpdate = () => {
    dispatch(updateContact({id:filteredContact.id,name,number}));
    setEdit(false);
  }

  // handleDelete method
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <li className={css.contactListItem}>
      
      { edit?<>
        <input
          type="text"
          name="name"
          // add \ before - in [' \-] to make it work (LMS)
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="tel"
          name="number"
          // add \ before - in [\-.\s] to make it work (LMS)
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
        <button onClick={handleUpdate}>Done</button>
      </>:<>
      <p>{filteredContact.name}&#58;</p>
      <p>{filteredContact.number}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleClickEdit}>Edit</button>
      </>}
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
