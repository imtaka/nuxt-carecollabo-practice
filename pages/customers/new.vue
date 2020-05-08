<template>
  <div>
    <div>
        <a href="/" class="button--grey">
            　トップ画面へ
        </a>
        <a href="/customers" class="button--grey">
            利用者一覧
        </a>
    </div>
    <div class="form">
      <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>利用者新規登録</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
   data: function() {
      return {
        name: ''
      }
    },
  created: function() {
    this.$store.dispatch('customers/init')
  },
  methods: {
    add() {
        this.$store.dispatch('customers/add', this.name)
        this.name = ''
      }
  }

}
</script>