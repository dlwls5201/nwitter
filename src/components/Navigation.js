import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({userObj}) => {
  return (
    <nav>
      <ul style={ {background: 'white', display: 'flex', justifyContent: 'center', paddingTop: '30px', paddingBottom: '10px', marginBottom: '0px'} }>
        <li>
          <Link to="/"
                style={ {marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px'} }
          >
            <FontAwesomeIcon icon={ faHome } color={ 'var(--navigation-color)' } size='2x' />
            <span style={ {marginTop: '10px', color: 'var(--navigation-color)'} }>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/profile"
                style={ {marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px'} }
          >
            <FontAwesomeIcon icon={ faUser } color={ 'var(--navigation-color)' } size='2x' />
            <span style={ {marginTop: '10px', color: 'var(--navigation-color)'} }>
                { userObj.displayName ? `${ userObj.displayName }의 Profile` : 'Profile' }
            </span>
          </Link>
        </li>
        <li>
          <Link to='/test'
                style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px'} }
          >
            <FontAwesomeIcon icon={ faAtom } color={ 'var(--navigation-color)' } size='2x' />
            <span style={ {marginTop: '10px', color: 'var(--navigation-color)'} }>Test</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation