import React from 'react'
import { firebaseInstance } from 'fbase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthForm from 'components/AuthForm'
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Auth = () => {
  const onSocialClick = async (event) => {
    const {target: {name}} = event
    let provider
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider()
    }
    const data = await firebaseInstance.auth().signInWithPopup(provider)
    console.log(data)
  }

  return (
    <div style={ {height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'} }>
      <FontAwesomeIcon icon={ faTwitter } color={ '#04AAFF' } size="3x" style={ {marginBottom: '30px'} } />
      <AuthForm />
      <div style={ {width: '320px', display: 'flex', justifyContent: 'space-between'} }>
        <button className="bg-white rounded-full text-xs py-2 px-2" onClick={ onSocialClick } name="google">Continue with Google <FontAwesomeIcon icon={ faGoogle } /></button>
        <button className="bg-white rounded-full text-xs py-2 px-2" onClick={ onSocialClick } name="github">Continue with Github <FontAwesomeIcon icon={ faGithub } /></button>
      </div>
    </div>
  )
}

export default Auth
