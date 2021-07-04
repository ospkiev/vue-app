import Vue from 'vue';
import api from '@/constants/api';

export const state = {
  users: [],
};

const getters = {
  getUserById: state => (id) => state.users.find(user => user.id === id),
};

const mutations = {
  'SET_USERS'(state, data) {
    state.users = data;
  },
};

const actions = {
  async getUsers({ commit }) {
    try {
      const { data } = await Vue.axios.get(api.users);
      commit('SET_USERS', data);
    } catch (error) {
      Vue.notify({
        group: 'foo',
        title: 'Error',
        text: error,
      });
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
