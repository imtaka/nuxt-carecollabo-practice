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
        <validation-provider rules="required|min:2|max:20" v-slot="{ errors }">
        <input v-model="name">
        <span>{{ errors[0] }}</span>
        </validation-provider>
        <select v-model="gender">
          <option disabled value="">性別</option>
          <option>男性</option>
          <option>女性</option>
        </select>
        <validation-provider rules="min_value:40|max_value:125" v-slot="{ errors }">
        <input type="number" v-model="age">
        <span>{{ errors[0] }}</span>
        </validation-provider>

        <button>利用者新規登録</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { min, max, required, min_value,max_value } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '名前は必要です'
});
extend('min', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length']
});
extend('max', {
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ['length']
});

export default {
  components: {
    ValidationProvider,
    required,
    max,
    min,
    min_value,
    max_value
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