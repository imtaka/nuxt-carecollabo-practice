import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const customersRef = db.collection('customers')

export const state = () => ({
  customers: []
  })

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('customers', customersRef)
    }),
  add: firestoreAction((context, {name, gender}) => {
    if(name.trim()) {
      customersRef.add({
        name: name,
        gender: gender,
        created: firebase.firestore.FieldValue.serverTimestamp()
          })
        }
      })
    }