<template>
    <v-content>
      <v-container fluid fill-height
        tag="section">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" transition="slide-y-reverse-transition">
              <v-toolbar color="success">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="auth" v-model="valid" lazy-validation>
                  <v-text-field  
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    type="text"
                    name="login" 
                    label="Login"
                    prepend-icon="person" 
                    required>
                  </v-text-field>
                  <v-text-field 
                    id="password" 
                    name="password" 
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    :type="showPass ? 'password' : 'text'"
                    :append-icon="showPass ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (showPass = !showPass)"
                    prepend-icon="lock"
                    required >
                  </v-text-field>
                  <v-alert 
                    v-if="error" 
                    :value="errorMsg" 
                    type="error" 
                    transition="scale-transition"
                    dismissible>
                    {{$store.state.error}}
                  </v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="submit" :disabled="!valid">Login</v-btn>
                <v-btn color="success" outline @click="clear">clear</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>

export default {
  name: 'auth-page',

  data() {
    return {
      valid: true,
      showPass: true,
      errorMsg: this.$store.state.error,
      name: '',
      nameRules: [
        v => !!v || 'Ну как же без имени то, а?',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      password: '',
      passwordRules: [ v => !!v || 'Пароль обязательный, ну..']
    }
  },

  computed: {
    // error() {
    //   return this.$store.state.error
    // }
  },

  methods: {
    submit() {
      if (this.$refs.auth.validate()) {
        console.log('login')
        this.$store.dispatch('login', this.name, this.password)
      }
    },

    clear() {
      this.$refs.auth.reset()
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
