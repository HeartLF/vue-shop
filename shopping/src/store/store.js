import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Name: '',
        name: '',
        img: ''
    },

    actions: {
        changeName(ctx, name) {
            ctx.commit('changeName', name);
        },
        changeUsername(ctx, person) {
            ctx.commit('changeUsername', person);
        }
    },
    mutations: {
        changeName(state, name) {
            state.Name = name
        },
        changeUsername(state, person) {
            state.name = person.name;
            state.img = person.img;
        }
    }
})