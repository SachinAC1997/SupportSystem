import React, { useState, useEffect } from 'react'

const SupportQuery = ({ onClick, question, number }) => {
  const [resolution, setResolution] = useState('')
  const [register, setRegister] = useState([])

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

  const fetchRegister = async (id) => {
    const res = await fetch(
      `http://localhost:5005/registers/${id}`)
    const data = res.json()

    return data
  }

  const addResolution = async (id) => {
    const addRes = await fetchRegister(id)
    const copyArray = addRes.query
    copyArray.map((array) => (
      (array.subject === question.subject && 
        array.text === question.text && 
        array.resolution === question.resolution) ? 
        array.resolution = resolution : ''
    ))
    const copyRegister = {...addRes, query: copyArray}

    const res = await fetch(
      `http://localhost:5005/registers/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(copyRegister)
      })
    const data = await res.json()

    setRegister(
      register.map((r) =>
        r.id === id ? 
        {...r, query: data.query} : r
      )
    )

    // console.log(copyRegister)
  }

  const submitHandler = (e) => {
    // console.log("do it fast")
    addResolution(number)
    onClick()
  }

  // console.log(number)
  return (
    <div className=''>
      <form onSubmit={() => submitHandler()}>
        <div className='registerInput'>
          <label> Subject </label>
          <input type='text' value={question.subject} readOnly/>
        </div>
        <div className='registerInput'>
          <label> Query Text </label>
          <textarea type='text' rows={4} maxLength={200} 
          value={question.text} readOnly />
        </div>
        <div className='registerInput'>
          <label> Resolution </label>
          <input type='text' placeholder={question.resolution} 
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}/>
        </div>
        <input className='registerButton'
         type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default SupportQuery
