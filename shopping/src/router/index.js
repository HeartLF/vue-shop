import Vue from 'vue'
import Router from 'vue-router'
import $ajax from 'axios';
import HelloWorld from '@/components/HelloWorld';
import Footer from '@/components/footer'
import Middle from '@/components/Middle';
import Content from '@/components/content'
import Game from '@/components/game'
import Add from '@/components/Add'
import My from '@/components/My'
import Product from '@/components/product'
import Account from '@/components/acount'
import ID from '@/components/ID';
import ID_content from '@/components/ID_content'
import Phone from '@/components/phone'
import Clother from '@/components/clother';
import Rent from '@/components/rent'
import Address from '@/components/address'
import My_Address from '@/components/My_Address'
import Chat from '@/components/chat'
import Login from '@/components/login'
Vue.use(Router);
Vue.prototype.$ajax = $ajax;
$ajax.defaults.withCredentials = true;
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
            path: '/clother/:id',
            name: 'Clother',
            component: Clother
        },
        {
            path: '/game/:id',
            name: 'Product',
            component: Product
        }, {
            path: '/acount/:id',
            name: 'acount',
            component: Account
        }, {
            path: '/acount/list/:id',
            name: 'ID',
            component: ID
        }, {
            path: '/acount/content/:id',
            name: 'ID_content',
            component: ID_content
        },
        {
            path: '/phone/:id',
            name: 'Phone',
            component: Phone
        },
        {
            path: '/rent',
            name: 'Rent',
            component: Rent
        },
        {
            path: '/addAddress',
            name: 'Address',
            component: Address
        },
        {
            path: '/My/My_Address',
            name: 'My_Address',
            component: My_Address
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})