import React, { useEffect, useState } from 'react'
import AppRouter from 'components/Router'
import { authService } from 'fbase'

function App() {
  const [init, setInit] = useState(false)
  const [userObj, setUserObj] = useState(null)

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user)
      } else {
        setUserObj(null)
      }
      setInit(true)
    })
  })

  const refreshUser = () => {
    const user = authService.currentUser
    console.log(user)
    setUserObj(
      {
        uid: user.uid,
        displayName: user.displayName
      }
    )
  }

  return (
    <div>
      { init ? <AppRouter refreshUser={ refreshUser } isLoggedIn={ Boolean(userObj) } userObj={ userObj } /> : 'Initializing...' }
    </div>
  )
}

export default App
