import React from 'react'
import MenuItem from '../MenuItem'

const LoggedOut = () => {
	return (
		<>
			<MenuItem to='/register'>Register</MenuItem>
			<MenuItem to='/login'>Login</MenuItem>
		</>
	)
}

export default LoggedOut
