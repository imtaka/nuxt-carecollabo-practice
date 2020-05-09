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
        <validation-provider rules="required" v-slot="{ errors }">
        <input v-model="name">
        <span>{{ errors[0] }}</span>
        </validation-provider>
        <select v-model="gender">
          <option disabled value="">性別</option>
          <option>男性</option>
          <option>女性</option>
        </select>
        <input type="number" v-model="age">

        <button>利用者新規登録</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '名前は必要です'
});

export default {
  components: {
    ValidationProvider,
    required
  },
    data: function() {
      return {
        name: '',
        gender: '',
        age: 0
      }
    },
  created: function() {
    this.$store.dispatch('customers/init')
  },
  methods: {
    add() {
        this.$store.dispatch('customers/add', {name:this.name, gender:this.gender,age:this.age})
        this.name = ''
        this.gender = ''
        this.age = ''
      }
  }

}
</script>