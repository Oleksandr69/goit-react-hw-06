import css from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {

    const contact = useSelector((state) => state.contact.contacts.items);
    console.log(contact);
    
    window.localStorage.setItem('saved-cardItems', JSON.stringify(contact));
   
    return <ul className={css.list}>
        {contact.map((card) => {
            return (<li key={card.id} className={css.cardItem}>
                <Contact
                    contact={card}
                />
            </li>);
        })}
    </ul>;
};
   
export default ContactList;