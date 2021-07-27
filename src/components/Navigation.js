import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({userObj}) => {
  return (
    <nav>
      <ul style={ {display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '30px'} }>
        <li>
          <Link to="/" style={ {marginRight: '10px'} }>
            <FontAwesomeIcon icon={ faTwitter } color={ '#04AAFF' } size='2x' />
          </Link>
        </li>
        <li>
          <Link to="/profile"
                style={ {marginLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px'} }
          >
            <FontAwesomeIcon icon={ faUser } color={ '#04AAFF' } size='2x' />
            <span style={ {marginTop: '10px', color: '#04AAFF'} }>
                { userObj.displayName ? `${ userObj.displayName }의 Profile` : 'Profile' }
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation