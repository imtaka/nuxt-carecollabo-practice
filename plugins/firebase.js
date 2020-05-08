import firebase from 'firebase'
import 'firebase/app'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase