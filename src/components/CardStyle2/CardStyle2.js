import React from 'react';
import styles from './CardStyle2.module.css';

function CardStyle2({single}){
  return (
    <div className={`${styles.card} card`}>
        <h5 className={styles.title}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h5>
        <span className={styles.date}>August 12, 2021 | Author</span>
         <p className={styles.text}>
          { single === false ? 'uia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehenderit':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id est laborum.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.'}
        </p>
        <span className={styles.read_more}>Read More <i className="fa fa-long-arrow-right"></i></span>
    </div>
  );
}


export default CardStyle2;
