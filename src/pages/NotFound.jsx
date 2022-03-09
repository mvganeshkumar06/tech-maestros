import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

  const NotFound = () => (
    <div className='container'>
        <img src='./004.jpg'></img>
      <Link  to="/">
        <button>Go To HomePage</button>
      </Link>
    </div>
  );

  export default NotFound;