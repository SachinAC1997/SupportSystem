import React, { useEffect, useState } from 'react'
import Support from './Support'
import Query from './Query'
import { useAuth } from './auth'

const Home = () => {
  const [shuffle, setShuffle] = useState(false)
  const [register, setRegister] = useState([])
  const [toggle, setToggle] = useState(true)
  const [id, setId] = useState()
  const auth = useAuth()
  let number, i = 0
  let queries = []

  useEffect(() => {
    const getQuery = async () => {
      const queryValue = await fetchQuery()
      setRegister(queryValue)
    }
    getQuery()
  }, [])

  const fetchQuery = async () => {
    const res = await fetch(
      'http://localhost:5005/registers')
    const data = res.json()
    return data
  }

  register.map((r) => (
   (r.name === auth.user.name) ?
    number = r.id : ''
  ))

  register.map((r) => (
    (r.id === number) ?
    queries = r.query : ''
  ))

  // console.log(queries)

  const handleShuffle = () => {
    setShuffle(!shuffle)
  }

  const doubleFunction = (check) => {
    handleToggle()
    // console.log(check)
    setId(check)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  // console.log(id)

  return (
    <div>
      <div className='homeHead'>
        <h1 className='left'>Support System</h1>
        <h1 className='right'>{auth.user.name}</h1>
        <button className='logout' onClick={() => auth.logout()}>Logout</button>
      </div>
      <div className='homeBody'>
        <div className='homeSupport'>
          {!shuffle && <button onClick={() => handleShuffle()}>Support</button>}
          {shuffle && <Support onClick={() => handleShuffle()} />}
        </div>
        <div className='homeQuery'>
          {toggle &&<ul>
            {queries.map((q) =>
              <li key={i++} onClick={() => doubleFunction(q)}>{q.subject}</li> 
            )}
          </ul>}
          {!toggle &&
              <Query onClick={() => handleToggle()} question={id}/> 
          }
        </div>
      </div>
    </div>
  )
}

export default Home
