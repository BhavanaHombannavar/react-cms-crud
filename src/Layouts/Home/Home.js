import React from 'react';
import Card from './../../components/Card/Card';
import CardStyle2 from './../../components/CardStyle2/CardStyle2';
import styles from './Home.module.css';

const Home = () => (
  <>
  <section className={styles.banner}>
    <div className="container">
      <h1>Hello ReactJs</h1>
      <p>Just another React Project</p>
    </div>
  </section>
  <section>
  <div className="container">
  <div className="row">
  <div className="col-md-4">
    <Card/>
  </div>
  <div className="col-md-4">
    <Card/>
  </div>
  <div className="col-md-4">
    <Card/>
  </div>
  <div className="col-md-4">
    <Card/>
  </div>
  <div className="col-md-4">
    <Card/>
  </div>
  <div className="col-md-4">
    <Card/>
  </div>
</div>
</div>
</section>
<section className="section2">
<div className="container cardstyle2">
<div className="row">
  <div className="col-md-6 cardstyle2-left">
    <CardStyle2 single={true}/>
  </div>
  <div className="col-md-6 cardstyle2-right">
    <CardStyle2 single={false}/>
    <CardStyle2 single={false}/>
  </div>
</div>
</div>
</section>
</>
);

export default Home;
