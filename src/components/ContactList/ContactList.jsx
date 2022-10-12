import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/contactsSlice';
import { ContactListItem,ContactDeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
            <ContactListItem key={id}>
                <p>{ `${name}: ${number}`}</p>
                <ContactDeleteButton type="button" onClick={()=> dispatch(deleteContact(id))}>Delete</ContactDeleteButton>
                </ContactListItem>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
                
    }))
}