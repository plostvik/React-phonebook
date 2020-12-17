import React from 'react';
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className={styles.wrapper}>
    <div title="404" className={styles.div}>
      404
    </div>
    <p className={styles.desc}>
      Кажется, вы потерялись! Попробуйте поискать{' '}
      <Link className={styles.link} to="/login">
        тут
      </Link>
    </p>
  </div>
);

export default NotFoundPage;
