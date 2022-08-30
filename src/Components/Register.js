import React, { useEffect, useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [register, setRegister] = useState([])
  const [query, setQuery] = useState([])

  const collect = []
  let valid = false, i = 0

  useEffect(() => {
    const getRegister = async () => {
      const registerValue = await fetchRegister()
      setRegister(registerValue)
    }
    getRegister()
  }, [])

  const fetchRegister = async () => {
    const res = await fetch (
      'http://localhost:5005/registers')
    const data = res.json()
    
    return data
  }

  const addRegister = async (update) => {
    const res = await fetch (
      'http://localhost:5005/registers', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(update)
      })
    const data = await res.json()

    setRegister([...register, data])
  }

  const checkRegister = (check) => {
    // console.log((check.name === name && check.password === password && check.email === email))
    collect[i++] = (check.name === name && 
                    check.password === password &&
                    check.email === email)
    // console.log(collect)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    register.map((r) => (
      checkRegister(r)
    ))
    for(let x in collect) {
      if(collect[x] === true) {
        valid = true
      }
    }
    if(valid) {
      alert('Username is already present\n try with different username')
    } else {
      addRegister({name, password, email, query})
    }
    setName('')
    setPassword('')
    setEmail('')
    setShowPassword(false)
    valid = false
    i = 0
  }

  return (
    <div className='register'>
      <form onSubmit={submitHandler}>
        <div className='registerInput'>
          <label htmlFor='name'> User Name: </label>
          <input type='text' id='name' 
          placeholder='User Name' value={name}
          onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className='registerInput'>
          <label htmlFor='password'> Password: </label>
          <input type={showPassword ? 'text' : 'password'} id='password' 
          placeholder='Password' value={password}
          onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className='registerCheckBox'>
          <label htmlFor='show'> Show Password </label>
          <input type='checkbox' id='show' value={showPassword}
          onClick={() => setShowPassword(!showPassword)}/>
        </div>
        <div className='registerInput'>
          <label htmlFor='email'> Email: </label>
          <input type='email' id='email' 
          placeholder='Email id' value={email}
          onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <input className='registerButton' type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register
