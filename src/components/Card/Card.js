import React from 'react';
import styles from './Card.module.css';

function Card(post){
  return (
    <div className={`${styles.card} card`}>
       <div className={styles.infos}>
        <p className={styles.title}>{post.post.post.title}</p>
         <p className={styles.text}>{post.post.post.body.length < 80 ? post.post.post.body : post.post.post.body.slice(0, 75)+'...'} </p>
          <span className={styles.date}>August 12, 2021 | {post.post.user.name}</span>
        <span className={styles.read_more}>Read More <i className="fa fa-long-arrow-right"></i></span>
      </div>
    </div>
  );
}

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
