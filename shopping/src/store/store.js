import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: ''
    },
    actions: {
        changeName(ctx, name) {
            ctx.commit('changeName', name);
        }
    },
    mutations: {
        changeName(state, name) {
            state.name = name
        }
    }
})