import React, { useState } from 'react';

// dummay data
import people from './data';

//icons pakage
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // states
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  /**
   * check number
   * @param {number} number  
   */
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  /**
   * move to next person
   */
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  /**
   * move to  prev person
   */
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  /**
   * move to random person
   */
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        {/* button prev person */}
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
         {/* button next person */}
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
       {/* button random person */}
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
