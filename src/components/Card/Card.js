import React from 'react';
import styles from './Card.module.css';

function Card(){
  return (
    <div className={`${styles.card} card`}>
       <div className={styles.infos}>
        <p className={styles.title}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
         <p className={styles.text}>uia et suscipit\nsuscipit recusandae consequuntur expedita et cum nreprehenderit </p>
          <span className={styles.date}>August 12, 2021 | Author</span>
        <span className={styles.read_more}>Read More <i className="fa fa-long-arrow-right"></i></span>
      </div>
    </div>
  );
}

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
