import React, { useState } from 'react'
import { dbService, storageService } from 'fbase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

const Nweet = ({nweetObj, isOwner}) => {

  const [editing, setEditing] = useState(false)
  const [newNweet, setNewNweet] = useState(nweetObj.text)

  const onDeleteClick = async () => {
    const ok = window.confirm('Are you sure you want to delete this nweet?')
    console.log(ok)
    if (ok) {
      await dbService.doc(`nweets/${ nweetObj.id }`).delete()
      await storageService.refFromURL(nweetObj.attachmentUrl).delete()
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev)

  const onNweetSubmit = async (event) => {
    event.preventDefault()
    await dbService.doc(`nweets/${ nweetObj.id }`).update({text: newNweet})
    setEditing(false)
  }

  const onNweetChange = (event) => {
    const {target: {value}} = event
    setNewNweet(value)
  }

  return (
    <div className='nweet'>
      { editing ? (
        <div>
          <h1 className={ 'text-center text-lg font-bold' }>Modify</h1>
          <form style={ {position: 'relative'} } className={ 'mt-5 mb-8' } onSubmit={ onNweetSubmit }>
            <input
              style={ {width: '100%'} }
              className={ 'formInput mb-5 mr-5' }
              type="text"
              placeholder="Edit your nweet"
              value={ newNweet }
              required
              onChange={ onNweetChange }
            />
            <div style={ {position: 'absolute', right: '0'} }>
              <button
                className={ 'cancelBtn mr-3' }
                onClick={ toggleEditing }>Cancel
              </button>
              <input
                className={ 'myBlueBtn' }
                type="submit"
                value="Update Nweet" />
            </div>
          </form>
        </div>
      ) : (
          <div style={ {display: 'flex', flexDirection: 'row', alignItems: 'center'} }>
            { nweetObj.attachmentUrl && (
              <img className={ 'rounded-full mr-5 w-12' } src={ nweetObj.attachmentUrl } />
            ) }
            <h4 className='pr-10'>{ nweetObj.text }</h4>
            { isOwner && (
              <div className='nweet__actions'>
                <span onClick={ onDeleteClick }>
                  <FontAwesomeIcon icon={ faTrash } />
                </span>
                <span onClick={ toggleEditing }>
                  <FontAwesomeIcon icon={ faPencilAlt } />
                </span>
              </div>
            ) }
          </div>
        ) }
    </div>
  )
}

export default Nweet
