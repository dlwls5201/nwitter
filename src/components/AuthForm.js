import { authService } from 'fbase'
import { useState } from 'react'

const AuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event) => {
    const {target: {name, value}} = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        data = await authService.signInWithEmailAndPassword(email, password)
      }
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  const toggleAccount = () => setNewAccount((prev) => !prev)

  return (
    <>
      <form onSubmit={ onSubmit } className="container">
        <input className="authInput" name="email" type="text" placeholder="Email" value={ email } onChange={ onChange } required />
        <input className="authInput" name="password" type="password" placeholder="password" value={ password } onChange={ onChange } required />
        <input className="authInput authSubmit" type="submit" value={ newAccount ? 'Create Account' : 'Log In' } />
      </form>
      { error && <span className="authError">{ error }</span> }
      <span onClick={ toggleAccount } className="authSwitch">
                { newAccount ? 'Sign In' : 'Create Account' }
      </span>
    </>
  )
}

export default AuthForm