<template>
  <section class="page">
    <div>
      <app-logo/>
      <h1 class="title">
        {{ name }}
      </h1>
      <h2 class="subtitle">
        {{ description }}
      </h2>
      <div class="links">
        <form-field 
          class="links__formfield"
          name="user"
          label="login"
          v-model="login"
          status="error"/>
        <app-button
          url="https://nuxtjs.org/"
          label="Documentation"
          color="green"/>
        <app-button
          url="https://github.com/nuxt/nuxt.js"
          label="GitHub"
          color="gray"/>
      </div>
    </div>
  </section>
</template>

<script>
// import { required, minLength, between } from 'vuelidate/lib/validators'

import AppLogo from '~/components/AppLogo.vue'
import AppButton from '~/components/AppButton.vue'
import FormField from '~/components/FormField.vue'

export default {
  name: 'main-page',
  components: {
    AppLogo,
    AppButton,
    FormField,
  },

  data() {
    return {
      name: 'financial calculator',
      description: 'financial calculator',
      login: '',
    }
  },
  
  // validations: {
  //   login: {
  //     required,
  //     minLength: minLength(5)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;

  &__formfield {
    margin: 0 auto;
  }
}
</style>
