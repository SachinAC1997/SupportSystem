import React from 'react'
import { useAuth } from './Components/auth'
import SignInUp from './Components/SignInUp'
import Home from './Components/Home'
import SupportUser from './Components/SupportUser'

const Apps = () => {
  const auth = useAuth()
  let valid = true, toggle = true

  if(auth.user.name === "support" && auth.user.password === "1234") {
    toggle = false
  } else {
    toggle = true
  }

  if(auth.user.name) {
    valid = false
  } else {
    valid = true
  }
  // console.log(toggle)
  return (
    <div>
      {toggle && <div>
        {valid && <SignInUp />}
        {!valid && <Home />}
      </div>}
      {!toggle && <div>
        <SupportUser />
      </div>}
    </div>
  )
}

export default Apps
