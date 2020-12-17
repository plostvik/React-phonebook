import { connect } from 'react-redux';
import { filterChange } from '../../redux/phonebook/phonebookActions';
import { getFilter } from '../../redux/phonebook/phonebookSelectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = {
  filterChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
