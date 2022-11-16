import { useState, useEffect } from 'react'

// component
import paginate from './utils';

// url 
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  // state
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  /**
   * get the users using url
   */
  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data))
    setLoading(false)
  }

  /**
   * passing dep
   */
  useEffect(() => {
    getProducts()
  }, [])

  return { loading, data }
}
