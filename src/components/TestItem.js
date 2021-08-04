import React, { useState } from 'react'

const TestItem = ({user, index, onChangeUser}) => {

  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(user.name)
  const [address, setAddress] = useState(user.address)
  const [memo, setMemo] = useState(user.memo)

  const toggleEditing = () => {
    if (editing === true) {
      onChangeUser({index, name, address, memo})
    }
    setEditing((prev) => !prev)
  }

  const onNameChange = (event) => {
    const {target: {value}} = event
    setName(value)
  }

  const onAddressChange = (event) => {
    const {target: {value}} = event
    setAddress(value)
  }

  const onMemoChange = (event) => {
    const {target: {value}} = event
    setMemo(value)
  }

  return (
    <tr>
      <td>{ editing ?
            <input
              placeholder={ user.name }
              type='text'
              value={ name }
              onChange={ onNameChange }
            /> : <h1>{ name }</h1>
      }
      </td>
      <td>{ editing ?
            <input
              placeholder={ user.address }
              type='text'
              value={ address }
              onChange={ onAddressChange }
            /> : <h1>{ address }</h1>
      }
      </td>
      <td>{ editing ?
            <input
              placeholder={ user.memo }
              type='text'
              value={ memo }
              onChange={ onMemoChange }
            /> : <h1>{ memo }</h1>
      }
      </td>
      <td onClick={ toggleEditing }>
        { editing ? 'SAVE' : 'EDIT' }
      </td>
    </tr>
  )
}

export default TestItem