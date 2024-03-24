import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { deleteContact, updateContact } from '../../../redux/contacts/contactsOperation';
import Button from '@mui/joy/Button';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Check from '@mui/icons-material/Check';
import Cancel from '@mui/icons-material/Cancel';
import { FormControl } from '@mui/base';


export const ContactListItem = ({ filteredContact, dispatch }) => {

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
    setEdit(!edit);
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
      
      { edit?
      <FormControl className={css.contactEdit}>
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
        <span style={{display:'inline-flex',gap:'8px'}}>
        <Button onClick={handleClickEdit} color="primary" size='sm'><Cancel /></Button>
        <Button onClick={handleUpdate} color='success' size='sm'><Check /></Button>
        </span>
      </FormControl>
      :
      <div className={css.contactEdit}>
      <p>{filteredContact.name} &#58;</p>
      <p>{filteredContact.number}</p>
      <span style={{display:'inline-flex',gap:'8px'}}>
      <Button onClick={handleDelete} color="danger" size='2'><Delete /></Button>
      <Button onClick={handleClickEdit} color='success' variant='outlined' size='sm'><Edit /></Button>
      </span>
      </div>}
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
