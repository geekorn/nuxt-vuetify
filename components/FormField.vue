<template>
  <div :class="['formfield', {'formfield_size_l': size}]">
    <label for="name" 
      class="formfield__label">{{label}}</label>
    <app-input 
      :id="name"
      class="formfield__input"
      type="text"
      size="5"
      placeholder="login"
      :status="status" />
    <span class="formfield__alert"></span>
  </div>
</template>

<script>
import AppInput from '~/components/AppInput.vue'

export default {
  name: 'formField',
  components: {
    AppInput
  },

  props: {
    size: {type: String, default: 's'},
    name: {type: String, default: ''},
    label: {type: String, default: ''},
    status: {type: String, default: ''},
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.formfield {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &_size {
    &_s {
      max-width: 200px;
    }
    &_l {
      max-width: 300px;
    }
  }

  &__label {
    margin-right: 10px;
    font-size: 1.5rem;
    color: $color-gray;
  }
  &__input {
    flex: 1;
  }
}
</style>
