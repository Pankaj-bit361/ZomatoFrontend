import React from 'react';
import styles from './Loader2.module.css';

const Loader2 = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.cube}>
        <div className={`${styles.side} ${styles.front}`}></div>
        <div className={`${styles.side} ${styles.back}`}></div>
        <div className={`${styles.side} ${styles.top}`}></div>
        <div className={`${styles.side} ${styles.bottom}`}></div>
        <div className={`${styles.side} ${styles.left}`}></div>
        <div className={`${styles.side} ${styles.right}`}></div>
      </div>
    </div>
  );
};

export default Loader2;
