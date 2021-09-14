import React from 'react';
import Card from './../../components/Card/Card';
import styles from './Home.css';

const Home = () => (
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
</div>
</div>
);

export default Home;
