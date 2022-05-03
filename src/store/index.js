import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
  },
  getters: {},
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    async fetchCards({ commit }) {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character'
        );
        commit('setCards', response.data.results);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
