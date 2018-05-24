import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  userInfo: {
    name: 'root-暂无'
  }
}
const getters = {
  userInfo: state => {
    return state.userInfo
  }
}
const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  }
}
let option = {
  modules: {
    user
  },
  state,
  getters,
  mutations
}
export default new Vuex.Store(option)
