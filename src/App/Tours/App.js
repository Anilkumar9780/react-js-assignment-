import React, { useState, useEffect } from 'react'

//component
import Loading from './Loading'
import Tours from './Tours'

// style css
import './index.css';

// url
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  // states
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

 /**
  * remove tour
  * @param {string} id 
  */ 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  /**
   * fetch Tours
   */
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  /**
   * passing dep
   */
  useEffect(() => {
    fetchTours()
  }, [])

  /**
   * set loading 
   */
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {/* passing props */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
