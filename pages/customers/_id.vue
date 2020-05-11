<template>
<div>
    <div>
        <a href="/" class="button--grey">
            トップ画面へ
        </a>
        <a href="/customers" class="button--grey">
            利用者一覧
        </a>
        <a href="/customers/edit" class="button--grey">
            利用者編集
        </a>
    </div>
    <h2>様の詳細</h2>

    {{ $route.params.id }}<!-- URLから個別の利用者IDを表示 -->

{{customer.name}}
    <!-- {{ customer.name }} -->

</div>
</template>

<script>
import firebase from "~/plugins/firebase.js"

export default {
  props: {
    name: String,
  },
  getCustomer() {
    const db = firebase.firestore();
    let customerDocRef = db.collection('customers').doc('fC9ETTxWpWCPud98qxmC')
    customerDocRef.get().then((doc) => {
    this.customer = doc.data()
    this.customer.name = doc.name
})
}

  /* getCustomers(){
  const db = firebase.firestore();
  let customersDocRef = db.collection('customers')
  customersDocRef.get().then((snapShot) => {
  snapShot.forEach((doc) => {
    this.customers.push({
      customer: doc.data(),
      customer_id: doc.id
    })
  })
})
  } */
  /*  */

  /* created: function() {
    this.$store.dispatch('customers/init')
  },
  data: function(){
    return{
        customerData: ''
    }
  },
    getCustomer() {
    const docRef = db.collection('customers').doc('fC9ETTxWpWCPud98qxmC')
    docRef
    .get()
    .then(function(doc) {
         if (doc.exists) {
           console.log('Document data:', doc.data())
         } else {
           // doc.data() will be undefined in this case
           console.log('No such document!')
         }
       })
       .catch(function(error) {
         console.log('Error getting document:', error)
       }) */

 /*  } */
    /* methods: {
      getData(){
             const db = firebase.firestore()
             let docCustomers = db.collection('customers').doc('fC9ETTxWpWCPud98qxmC')
             docCustomers.get()
             .then(function(doc) {
             document.getElementById("customer.name").innerHTML = (doc.data().name)
         })

      }
    } */

  }
</script>
