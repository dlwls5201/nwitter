import { dbService, storageService } from 'fbase'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Loading from 'components/Loading'

const NweetFactory = ({userObj}) => {
  const [nweet, setNweet] = useState('')
  const [attachment, setAttachment] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    if (nweet === '') {
      return
    }

    event.preventDefault()

    setLoading(true)

    let attachmentUrl = ''

    if (attachment !== '') {
      const attachmentRef = storageService.ref().child(`${ userObj.uid }/${ uuidv4() }`)
      const response = await attachmentRef.putString(attachment, 'data_url')
      attachmentUrl = await response.ref.getDownloadURL()
    }

    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      createdId: userObj.uid,
      attachmentUrl
    }

    await dbService.collection('nweets').add(nweetObj)

    setNweet('')
    setAttachment('')

    setLoading(false)
  }

  const onChange = (event) => {
    const {target: {value}} = event
    setNweet(value)
  }

  const onFileChange = (event) => {
    const {target: {files}} = event
    const theFile = files[0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const {currentTarget: {result}} = finishedEvent
      setAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }

  const onClearAttachment = () => setAttachment('')

  return (
    <form onSubmit={ onSubmit } className='factoryForm'>
      <div className='factoryInput__container'>
        <input className='factoryInput__input' value={ nweet } onChange={ onChange } type="text" placeholder="What's on your mind" maxLength={ 120 } />
        <input className='factoryInput__submit' type="submit" value="&rarr;" />
        { loading && <Loading /> }
        <label className='factoryInput__label'>
          <span>Add photos</span>
          <FontAwesomeIcon icon={ faPlus } />
          <input style={ {display: 'none'} } onChange={ onFileChange } type="file" accept="image/*" />
        </label>
      </div>
      { attachment && (
        <div className='factoryForm__attachment'>
          <img src={ attachment } width="50px" height="50px" />
          <div className='factoryForm__clear' onClick={ onClearAttachment }>
            <span>Remove</span>
            <FontAwesomeIcon icon={ faTimes } />
          </div>
        </div>
      ) }
    </form>
  )
}

export default NweetFactory