// ========================================================================================
import { auth } from '../firebaseIndex';
import { firebase } from '../firebaseIndex';
// ========================================================================================

export const doSignIn = (email, password, error) => {
	return new Promise((resolve, reject) => {
		return auth.doSignInWithEmailAndPassword(email, password)
			.then((user) => {
				if (user) {
					resolve(user)
				} else {
					reject(new Error('FAILED USER SIGN IN:', error))
				}
			})
	})
}

export const signOutOfFirebase = () => {
	return new Promise((resolve, reject) => {
		return auth.doSignOut()
			.then((data) => resolve())
	})
}