import React from 'react';
import { Link } from "react-router-dom";
import catImg from '../../media/cat.jpg';

const Home = () => (
  <div className="home-page">
    <h1>SSR Project with React + React-Router</h1>
    <div className="home-page__section">
      <img src="https://cdn.dribbble.com/users/530738/screenshots/4107342/cool_kid_2_by_martin_kundby_motiondesigner.gif" />
      <Link to="/animations"><h1>Animations</h1></Link>
    </div>
    <div className="home-page__section">
      <img src={catImg} />
      <Link to="/news"><h1>News</h1></Link>
    </div>
  </div>
)

export default Home;