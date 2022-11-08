import { createContext, useContext, useEffect, useState } from 'react'
import User_API from '../services/User_API'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [token, setToken] = useState(null)
	// const [userName, setUserName] = useState(null)
	// const [userEmail, setUserEmail] = useState(null)
	// const [userPhotoUrl, setUserPhotoUrl] = useState(null)
	// const [loading, setLoading] = useState(true)

	const login = async data => {
		const res = await User_API.login(data)
		if (res.status === 'success') {
			setCurrentUser(res.data)
			console.log(res.data)
			setToken(res.data.access_token)
			console.log(token)

			localStorage.setItem(
				'userData',
				JSON.stringify(res.data.access_token)
			)
			return { status: 'success' }
		}
	}

	// const resetPassword = email => {
	// 	return sendPasswordResetEmail(auth, email)
	// }

	// const setEmail = email => {
	// 	return updateEmail(currentUser, email)
	// }

	// const setPassword = newPassword => {
	// 	return updatePassword(currentUser, newPassword)
	// }

	// useEffect(() => {
	// 	// listen for auth-state changes
	// 	const unsubscribe = onAuthStateChanged(auth, user => {
	// 		setCurrentUser(user)
	// 		setUserName(user?.displayName)
	// 		setUserEmail(user?.email)
	// 		setUserPhotoUrl(user?.photoURL)
	// 		setLoading(false)
	// 	})

	// return unsubscribe
	// }, [])

	const contextValues = {
		// here be everything the children needs/should be able to use
		currentUser,
		login,
		// reloadUser,
		// resetPassword,
		// setEmail,
		// setPassword,
		// userName,
		// userEmail,
		// userPhotoUrl,
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContextProvider as default, useAuthContext }
