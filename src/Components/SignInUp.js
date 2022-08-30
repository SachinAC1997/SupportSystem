import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

const SignInUp = () => {
  const [shuffle, setShuffle] = useState(true)
  
  let text = shuffle ? 'Login' : 'Register' 

  return (
    <div>
      <button onClick={() => setShuffle(!shuffle)}
      className='signInUpButton' >{text}</button>
      {shuffle && <Register />}
      {!shuffle && <Login />}
    </div>
  )
}

export default SignInUp
