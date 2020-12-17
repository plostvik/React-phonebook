import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({ filter, filterChange }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        onChange={e => filterChange(e.target.value)}
        value={filter}
        className={styles.input}
      />
    </div>
  );
}

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
