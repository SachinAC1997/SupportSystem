import React, { useEffect, useState } from 'react'
import { useAuth } from './auth'
import SupportQuery from './SupportQuery'

const SupportUser = () => {
  const [register, setRegister] = useState([])
  const [toggle, setToggle] = useState(true)
  const [update, setUpdate] = useState()
  const [number, setNumber] = useState()
  const auth = useAuth()
  let i = 0

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

  const doubleFunction = (check, num) => {
    handleClick()
    setUpdate(check)
    setNumber(num)
    // console.log(num)
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  // console.log(number)

  return (
    <div>
      <div className='support'>
        <h1 className='leftSide'>Support System</h1>
        <h1 className='rightSide'>{auth.user.name}</h1>
        <button className='logout' onClick={() => auth.logout()}>Logout</button>
      </div>
      <div className='supportBody'>
        <div className='supportContent'>
          {toggle && <ul>
            {register.map((reg) => (
              reg.query.map((q) => (
                <li key={i++} onClick={() => doubleFunction(q, reg.id)}>{q.subject}</li>
              ))
            ))}
          </ul>}
          {!toggle && <SupportQuery onClick={() => handleClick()} 
          question={update} number={number}/>}
        </div>
      </div>
      
    </div>
  )
}

export default SupportUser
