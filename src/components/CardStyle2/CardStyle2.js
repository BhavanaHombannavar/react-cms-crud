import React from 'react';
import styles from './CardStyle2.module.css';

function CardStyle2({post, single}){
  console.log(post)
  return (
    <div className={`${styles.card} card`}>
        <h5 className={styles.title}>{post.post.title}</h5>
        <span className={styles.date}>August 12, 2021 | {post.user.name}</span>
         <p className={styles.text}>
          { single === false ? post.post.body.length < 80 ? post.post.body : post.post.body.slice(0, 75)+'...'
            :
            post.post.body.length < 670 ? post.post.body : post.post.body.slice(0, 665)+'...'
          }
        </p>
        <span className={styles.read_more}>Read More <i className="fa fa-long-arrow-right"></i></span>
    </div>
  );
}


export default CardStyle2;
