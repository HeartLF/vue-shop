// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
    //引入mint-ui
import MintUi from 'mint-ui';
//引入样式
import 'mint-ui/lib/style.css';

import store from './store/store';
//安装插件
Vue.use(MintUi);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})