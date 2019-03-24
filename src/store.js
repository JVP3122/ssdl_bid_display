import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allBids: {},
    winningBids: {},
    playerBids: {},
    current: '03_24',
  },
  mutations: {
    setPlayerBids(state, payload) {
      state.playerBids = {}
      try {
        Object.keys(payload).forEach(bid => {
          state.playerBids[bid] = JSON.parse(payload[bid])
        })
      } catch(err) {
        state.playerBids = payload
      }
    },
    setAllBids(state, payload) {
      state.allBids = {}
      try {
        Object.keys(payload).forEach(bid => {
          state.allBids[bid] = JSON.parse(payload[bid])
        })
      } catch(err) {
        state.allBids = payload
      }
    },
    setWinningBids(state, payload) {
      state.winningBids = {}
      try {
        Object.keys(payload).forEach(bid => {
          state.winningBids[bid] = JSON.parse(payload[bid])
        })
      } catch(err) {
        state.winningBids = payload
      }
    }
  },
  actions: {
    getPlayerBids({ commit }, payload) {
      let bids = require(`@/assets/bids/${payload}/all_players.json`);
      commit('setPlayerBids', bids);
    },
    getAllBids({ commit }, payload) {
      let bids = require(`@/assets/bids/${payload}/all_bids.json`);
      commit('setAllBids', bids);
    },
    getWinningBids({ commit }, payload) {
      let bids = require(`@/assets/bids/${payload}/winning_bids.json`);
      commit('setWinningBids', bids);
    },
  }
})

export default store