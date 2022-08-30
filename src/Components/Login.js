import React, { useEffect, useState } from 'react'
import { useAuth } from './auth'

const Login = () => {
  const [login, setLogin] = useState({
    name: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [Logins, setLogins] = useState([])
  const [support, setSupport] = useState([])
  const auth = useAuth()
  const collect = []
  let i = 0, valid = false

  useEffect(() => {
    const getLogin = async () => {
      const logins = await fetchLogin()
      setLogins(logins)
    }
    const getSupport = async () => {
      const sup = await fetchSupport()
      setSupport(sup)
    }
    getLogin()
    getSupport()
  }, [])

  const fetchLogin = async () => {
    const res = await fetch(
      'http://localhost:5005/registers')
    const data = res.json()
    return data
  }

  const fetchSupport = async () => {
    const res = await fetch(
      'http://localhost:5005/support')
    const data = res.json()
    return data
  }

  // console.log(support)

  const checkLogin = (check) => {
    collect[i++] = (check.name === login.name && check.password === login.password)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    support.map((s) => (
      (s.name === login.name && s.password === login.password) ?
      valid = true : ''
    ))

    Logins.map((check) =>
      checkLogin(check)
    )

    for(let x in collect) {
      if(collect[x] === true) {
        valid = true
      }
    }

    // console.log(valid)
    if(valid) {
      auth.login(login)
    } else {
      alert('Enter valid user details')
    }
  }

  return (
    <div className='register'>
      <form onSubmit={submitHandler}>
        <div className='registerInput'>
          <label htmlFor='name'> User Name: </label>
          <input type='text' id='name' 
          placeholder='User Name' value={login.name}
          onChange={(e) => setLogin({...login, name: e.target.value})} required/>
        </div>
        <div className='registerInput'>
          <label htmlFor='password'> Password: </label>
          <input type={showPassword ? 'text' : 'password'} id='password' 
          placeholder='Password' value={login.password}
          onChange={(e) => setLogin({...login, password: e.target.value})} required/>
        </div>
        <div className='registerCheckBox'>
          <label htmlFor='show'> Show Password </label>
          <input type='checkbox' id='show' value={showPassword}
          onClick={() => setShowPassword(!showPassword)}/>
        </div>
        <input className='registerButton loginButton' type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
