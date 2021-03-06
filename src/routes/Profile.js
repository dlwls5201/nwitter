import React, { useEffect, useState } from 'react'
import { authService, dbService } from 'fbase'
import { useHistory } from 'react-router-dom'

const Profile = ({refreshUser, userObj}) => {
  const history = useHistory()
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

  const onLogOutClick = () => {
    authService.signOut()
    history.push('/')
  }

  const onChange = (event) => {
    const {target: {value}} = event
    setNewDisplayName(value)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({displayName: newDisplayName})
      refreshUser()
    }
  }

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection('nweets')
      .where('creatorId', '==', userObj.uid)
      .orderBy('createdAt')
      .get()
    console.log(nweets.docs.map((doc) => doc.data()))
  }

  useEffect(() => {
    //getMyNweets()
  }, [])

  return (
    <div className='profileContainer'>
      <form onSubmit={ onSubmit } className='profileForm'>
        <input className='formInput' onChange={ onChange } type="text" placeholder="Display name" value={ newDisplayName } autoFocus />
        <input className='myBlueBtn' type="submit" value="Update Profile" />
      </form>
      <span className='mt-10 cancelBtn' onClick={ onLogOutClick }>Log Out</span>
    </div>
  )
}

export default Profile
