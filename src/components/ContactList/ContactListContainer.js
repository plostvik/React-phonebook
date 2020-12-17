import { connect } from 'react-redux';
import { getvisibleContacts } from '../../redux/phonebook/phonebookSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: getvisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
