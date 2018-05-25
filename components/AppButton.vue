<template>
  <a
    v-if="url"
    :href="url"
    target="_blank"
    :class="['button', `button_color_${color}`]"
    >{{label}}</a>
</template>

<script>
  export default {
    name: 'AppButton',
    props: {
      // type: {type: String, default: 'button'},
      url: {type: String, default: 'https://nuxtjs.org/'},
      label: {type: String, default: 'Documentation'},
      color: {type: String, default: 'green'},
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  text-decoration: none;
  padding: 10px 30px;

  &_color_green {
    border-color: $color-green;
    color: $color-green;
    &:hover {
      color: #fff;
      background-color: $color-green;
    }
  }
  &_color_gray {
    border-color: $color-gray;
    color: $color-gray;
    &:hover {
      color: #fff;
      background-color: $color-gray;
    }
  }
}

</style>
