import React, { useState, useEffect } from 'react';

// package
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

// dummay Data
import data from './data';

// style
import './index.css';

function App() {
  // state
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  /**
   * move to next index
   */
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }

  /**
   * move to prev index
   */
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  /**
   * auto move next index
   */
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 2000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  // return function
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span></span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {/* maping data */}
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        {/* prev dutton  */}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        {/* next button */}
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
