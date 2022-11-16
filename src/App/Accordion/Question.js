import React, { useState } from 'react';

//package
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ 
  //get props
  title,
   info
 }) => {
  //states
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {/* button show infomation */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
