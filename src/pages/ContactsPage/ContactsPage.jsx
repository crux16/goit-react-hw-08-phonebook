import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <h3>Filter</h3>
      <Filter />
      <h3>Contact List:</h3>
      <ContactList />
    </HelmetProvider>
  );
};

export default ContactsPage;
