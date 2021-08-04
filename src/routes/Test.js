import { useState } from 'react'
import readXlsxFile from 'read-excel-file'
import TestItem from 'components/TestItem'
import { dbService } from 'fbase'

const Test = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')
  const [filterUsers, setFilterUsers] = useState([])

  /**
   * User
   */
  const onSubmit = (event) => {
    event.preventDefault()

    const ok = window.confirm('Save this data?')
    if (ok) {
      users.forEach(async user => {
        await dbService.collection('users').add(user)
      })
    }
  }

  const onChange = (event) => {
    const {target: {files}} = event
    const theFile = files[0]

    const tempData = []

    readXlsxFile(theFile).then((files) => {
      files.forEach((file, index) => {
        if (index === 0) {
          //..
        } else {
          tempData.push(
            {
              name: file[1],
              address: file[3]
            }
          )
        }
      })

      setUsers(tempData)
    })
  }

  const onChangeUser = ({index, name, address, memo}) => {
    const tempUsers = users
    tempUsers[index] = {
      name, address, memo
    }
    setUsers(tempUsers)
  }

  /**
   *  Search
   */
  const onSearchSubmit = (event) => {
    event.preventDefault()

    console.log(filter.toLowerCase())

    const tempUsers = users.filter(
      user => {
        return user.name.toLowerCase().includes(filter.toLowerCase())
      }
    )

    setFilterUsers(tempUsers)
  }

  const onSearchChange = (event) => {
    const {target: {value}} = event
    setFilter(value)
  }

  return (
    <div className={ 'w-full h-full px-5 text-lg font-Roboto' }>
      <form onSubmit={ onSubmit }>
        <label>
          <span>Add Excel File</span>
          <input style={ {display: 'none'} } onChange={ onChange } type='file' accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
          <input className={ 'px-5' }
                 style={ {cursor: 'pointer', backgroundColor: 'var(--navigation-color)', color: 'white', marginLeft: '10px'} }
                 type="submit"
                 value="SAVE"
          />
        </label>
      </form>
      <form className={ 'mt-5 mb-5' } onSubmit={ onSearchSubmit }>
        <input
          placeholder='filter'
          type='text'
          value={ filter }
          onChange={ onSearchChange }
        />
        <input
          className={ 'px-5' }
          style={ {cursor: 'pointer', backgroundColor: 'var(--navigation-color)', color: 'white', marginLeft: '10px'} }
          type='submit' />
      </form>

      <table style={ {background: 'rgb(196,100,41)'} }>
        <thead>
        <tr>
          <td>Name</td>
          <td>Address</td>
          <td>Memo</td>
        </tr>
        </thead>
        <tbody>
        { filterUsers.length > 0 ?
          (
            filterUsers.map((user, index) => (
              <TestItem user={ user } index={ index } onChangeUser={ onChangeUser } />
            ))
          ) : (
            users.map((user, index) => (
              <TestItem user={ user } index={ index } onChangeUser={ onChangeUser } />
            ))
          )
        }
        </tbody>
      </table>
    </div>
  )
}
export default Test


