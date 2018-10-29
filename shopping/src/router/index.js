import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Footer from '@/components/footer'
import Middle from '@/components/Middle';
import Game from '@/components/game'
import Add from '@/components/Add'
import My from '@/components/My'
Vue.use(Router)
Vue.component('FooterVue', Footer);
export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/add',
            name: 'Add',
            component: Add
        }, {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/game',
            name: 'Game',
            component: Game
        }
    ]
})