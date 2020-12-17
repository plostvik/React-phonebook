import { connect } from 'react-redux';
import { removeContact } from '../../redux/phonebook/phonebookOperations';
import ContactListItem from './ContactListItem';

const mapStateToProps = (state, ownProps) => ({
  contact: ownProps.contact,
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
