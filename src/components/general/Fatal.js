import React from "react";
import "../../css/errorPage.css";

const Fatal = (props) => (
  <div id='oopss'>
    <div id='error-text'>
      <img
        src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg'
        alt='404'
      />
      <span>Ooops!</span>
      <p className='p-a'>{props.error}</p>
    </div>
  </div>
);

export default Fatal;
