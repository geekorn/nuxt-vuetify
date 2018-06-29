import axios from 'axios'

export const state = () => ({
  authUser: null,
  error: null,
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_ERROR: function (state, message) {
    state.error = message
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  // nuxtServerInit({ commit }, { req }) {
  //   if (req.session && req.session.authUser) {
  //     commit('SET_USER', req.session.authUser)
  //   }
  // },
  login({ commit }, { username, password }) {
    try {
      // const { data } = await axios.post('/api/login', { username, password })
      if (username === 'admin' && password === 'admin') {
        commit('SET_USER', data)
      } else {
        commit('SET_ERROR', 'Пароль забыл чтоль?')
      }
    } catch (error) {
      // if (error.response && error.response.status === 401) {
      //   throw new Error('Bad credentials')
      // }
      console.log(error)
      throw error
    }
  },

  logout({ commit }) {
   // await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}