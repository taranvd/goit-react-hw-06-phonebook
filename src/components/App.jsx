import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Section title="Phone Book">
        <ContactForm />
      </Section>

      {contacts.length > 0 && (
        <Section title="Contacts">
          <ContactFilter />
          <ContactsList />
        </Section>
      )}
    </>
  );
};
