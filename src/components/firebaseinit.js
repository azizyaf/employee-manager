import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfige from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfige)
export default firebaseApp.firestore()
