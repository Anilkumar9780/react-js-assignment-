import React, { useState, useEffect } from 'react'

// component 
import { useFetch } from './useFetch'
import Follower from './Follower';

// style
import './index.css';

function App() {
  // state
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  // passing loading 
  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [data, loading, page])

  /**
   * move to next page 
   */
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  };

  /**
   * move to prev Page 
   */
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  };

  /**
   * click to page number 
   * @param {number} index 
   */
  const handlePage = (index) => {
    setPage(index)
  };

  return (
    <main>
      <div className='section-title'>
        {/* loding button */}
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {/* maping followers Data */}
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            {/* prev button */}
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {/* maping index */}
            {data.map((item, index) => {
              return (
                // number button
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            {/* next button */}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
