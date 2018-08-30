import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/pages/home.vue'
import index from '../components/pages/index.vue'
import common from '../components/pages/common.vue'
import detail from '../components/pages/detail.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/index',
            name: 'index',
            component: index,
            children: [{
                path: '/',
                name: 'home',
                component: home
            },
            {
                path: '/common',
                name: 'common',
                component: common
            },
            {
                path: '/detail',
                name: 'detail',
                component: detail
            }
        ]
        }
    ]
})