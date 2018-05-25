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
import AppLogo from '~/components/AppLogo.vue'
import AppButton from '~/components/AppButton.vue'

export default {
  name: 'main-page',
  components: {
    AppLogo,
    AppButton,
  },

  data() {
    return {
      name: 'financial calculator',
      description: 'financial calculator',
    }
  }
}
</script>

<style>
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
}
</style>
