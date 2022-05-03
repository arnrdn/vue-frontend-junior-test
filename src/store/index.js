import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    pageNumber: 1,
    cardsPerPage: 5,
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getPages(state) {
      // будет показывать 5 карточек на страницу
      return Math.ceil(state.cards.length / 5);
    },
    getPaginatedCards(state) {
      let from = (state.pageNumber - 1) * state.cardsPerPage;
      let to = from + state.cardsPerPage;
      return [...state.cards].slice(from, to);
    },
    getPageNumber(state) {
      return state.pageNumber;
    },
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
    setPage(state, pageNumber) {
      state.pageNumber = pageNumber;
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
    pageChange({ commit }, pageNumber) {
      commit('setPage', pageNumber);
    },
  },
  modules: {},
});
