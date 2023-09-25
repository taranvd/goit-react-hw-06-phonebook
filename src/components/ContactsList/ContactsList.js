import {
  ButtonClearAll,
  ButtonStyled,
  List,
  ListItem,
} from './ContactsList.style';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { clearAll } from 'redux/contactsSlice';

export const ContactsList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <span style={{ textAlign: 'center' }}>{contact.name} </span>
          <span style={{ textAlign: 'center' }}>{contact.number}</span>
          <ButtonStyled onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </ButtonStyled>
        </ListItem>
      ))}
      {contacts.length >= 3 && (
        <ButtonClearAll onClick={() => dispatch(clearAll())}>
          Clear all
        </ButtonClearAll>
      )}
    </List>
  );
};
