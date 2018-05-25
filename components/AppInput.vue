<template>
  <input
    class="input"
    :class="{ [`input_status_${status}`]: status }"
    @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    status: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
/* .input {
  padding: 1em;
  border: 1px solid grey;
  border-radius: 0.25rem;
} */

.input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px;
  outline: none;
  border: 1px solid $color-gray;
  border-radius: 5px;

  font-size: 1.25rem;

  &:focus {
    border-color: $color-green;
  }
}

.input_status_error {
  border-color: red;
}
</style>