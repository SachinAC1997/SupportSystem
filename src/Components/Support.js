import React, { useEffect, useState } from 'react'
import { useAuth } from './auth'

const Support = ({onClick}) => {
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  const [resolution, setResolution] = useState('')

  // const [query, setQuery] = useState([])
  const [register, setRegister] = useState([])

  const auth = useAuth()
  let number

  useEffect(() => {
    const getRegister = async () => {
      const updateRegister = await fetchRegisters()
      setRegister(updateRegister)
    } 
    getRegister()
  }, [])

  const fetchRegisters = async () => {
    const res = await fetch(
      'http://localhost:5005/registers')
    const data = res.json()

    return data
  }

  register.map((r) => (
    (r.name === auth.user.name) ? number = r.id : ''
  ))

  // console.log(number)

  const fetchRegister = async (id) => {
    const res = await fetch(
      `http://localhost:5005/registers/${id}`)
    const data = res.json()

    return data
  }

  const addQuery = async (id, update) => {
    const addRegister = await fetchRegister(id)
    const copyArray = addRegister.query
    copyArray.push(update)
    const copyRegister = {...addRegister, query: copyArray}

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
    // console.log(copyArray)
  }

  // console.log(register)

  const submitHandler = (e) => {
    e.preventDefault()
    addQuery(number, {subject, text, resolution})
    setSubject('')
    setText('')
    onClick()
  }

  return (
    <div className=''>
      <form onSubmit={submitHandler}>
        <div className='registerInput'>
          <label htmlFor='subject'> Subject: </label>
          <input type='text' id='subject' 
          placeholder='Subject of query' value={subject}
          onChange={(e) => setSubject(e.target.value)} required/>
        </div>
        <div className='registerInput'>
          <label htmlFor='textarea'> Query Text: </label>
          <textarea id='textarea' rows={4} cols={31} maxLength={200}
          placeholder='Explain your query' value={text}
          onChange={(e) => setText(e.target.value)} required/>
        </div>
        <input className='registerButton' type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Support

  // useEffect(() => {
  //   const getQuery = async () => {
  //     const updateQuery = await fetchQuery()
  //     setQuery(updateQuery)
  //   }
  //   getQuery()
  // }, [])

  // const fetchQuery = async () => {
  //   const res = await fetch(
  //     'http:localhost:5005/query')
  //   const data = res.json()
  //   return data
  // }

  // const addQuery = async (update) => {
  //   const res = await fetch(
  //     'http://localhost:5005/query', {
  //       method: 'POST',
  //       headers: {'Content-type': 'application/json'},
  //       body: JSON.stringify(update)
  //     })
  //   const data = await res.json()

  //   setQuery([...query, data])
  // }
