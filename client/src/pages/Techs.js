import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { response } from "express";

function Techs() {
  const [TECH, setTECH] = useState('');
  const [NAME, setName] = useState('');

useEffect(() => {
  Axios.get ('http://localhost:3001/Techs').then((response)=>{
    console.log(response.data);
  });
}, []);
    
return (
  <div className='techs'>
    <h1>Techs List. @</h1>
    <p>
      Techs Report. Page
    </p>
  </div>
);
}

export default Techs;
