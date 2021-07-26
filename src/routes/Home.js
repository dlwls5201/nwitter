import React, { useEffect, useState } from 'react'
import { dbService } from '../fbase'
import Nweet from '../components/Nweet'
import NweetFactory from '../components/NweetFactory'

const Home = ({userObj}) => {
  const [nweets, setNweets] = useState([])

  useEffect(() => {
    dbService.collection('nweets').onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setNweets(nweetArray)
    })
  }, [])

  return (
    //TODO test color
    <div style={ {backgroundColor: 'orange'} } className='container'>
      <NweetFactory userObj={ userObj } />
      <div style={ {marginTop: '30px'} }>
        { nweets.map((nweet) => (
          <Nweet
            key={ nweet.id }
            nweetObj={ nweet }
            isOwner={ userObj.uid === nweet.createdId }
          />
        )) }
      </div>
    </div>
  )
}

export default Home
