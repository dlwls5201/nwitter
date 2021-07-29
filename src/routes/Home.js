import React, { useEffect, useState } from 'react'
import { dbService } from 'fbase'
import Nweet from 'components/Nweet'
import NweetFactory from 'components/NweetFactory'

const Home = ({userObj}) => {
  const [nweets, setNweets] = useState([])

  useEffect(() => {
    dbService.collection('nweets').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setNweets(nweetArray)
    })
  }, [])

  return (
    <div style={ {marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
      <NweetFactory userObj={ userObj } />
      <div style={ {width: '500px', marginTop: '30px'} }>
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
