<template>
    <div>
        <div>
            <a href="/" class="button--grey">
            　トップ画面へ
        　　</a>
        　　<a href="/customers/new" class="button--grey">
              利用者新規登録
        　　</a>
        </div>
        <h2>利用者一覧</h2>
        <div>
        <ul>
          <li v-for="customer in customers" :key="customer.id">
            {{ customer.name }}
          </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
  created: function() {
    this.$store.dispatch('customers/init')
  },
    computed: {
      customers() {
        return this.$store.state.customers.customers
      }
    }
}
</script>