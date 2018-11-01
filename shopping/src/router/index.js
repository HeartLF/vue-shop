import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Footer from '@/components/footer'
import Middle from '@/components/Middle';
import Content from '@/components/content'
import Game from '@/components/game'
import Add from '@/components/Add'
import My from '@/components/My'
import Product from '@/components/product'
Vue.use(Router)
Vue.component('FooterVue', Footer);
export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            redirect: '/Middle',
            // name: 'HelloWorld',
            component: HelloWorld,
            children: [{
                path: '/Add',
                name: 'Add',
                component: Add
            }, {
                path: '/Middle',
                name: 'Middle',
                component: Middle
            }, {
                path: '/My',
                name: 'My',
                component: My
            }]
        },
        {
            path: '/game',
            name: 'Game',
            component: Game
        }, {
            path: '/game/:id',
            name: 'Product',
            component: Product
        }
    ]
})