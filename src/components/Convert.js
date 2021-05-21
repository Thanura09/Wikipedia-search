import React, { useState, useEffect } from "react";

import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          target: language.target,  
          q: text,  
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
    });
  }, [language, text]);

  return (
    <div>
      <h1>HH</h1>
    </div>
  );
};

export default Convert;
