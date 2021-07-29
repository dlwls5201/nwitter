import React from 'react'
import { firebaseInstance } from 'fbase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthForm from 'components/AuthForm'
import { faAndroid, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'

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
    <div style={ {background: 'linear-gradient(#190e1f,#190e1f,#190e1f,#3C1951,#3C1951,#EF9A93,#ffddda)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'} }>
      <p style={ {fontSize: '25px', color: 'var(--android-color)', textShadow: '0 0 22px'} }>Happy Handal Member ♥️</p>
      <FontAwesomeIcon icon={ faAndroid } color={ 'var(--android-color)' } size="3x" style={ {marginBottom: '30px'} } />
      <AuthForm />
      <div style={ {width: '320px', display: 'flex', justifyContent: 'space-between'} }>
        <button className="bg-white rounded-full text-xs py-2 px-2" onClick={ onSocialClick } name="google">Continue with Google <FontAwesomeIcon icon={ faGoogle } /></button>
        <button className="bg-white rounded-full text-xs py-2 px-2" onClick={ onSocialClick } name="github">Continue with Github <FontAwesomeIcon icon={ faGithub } /></button>
      </div>
    </div>
  )
}

export default Auth
