export default [
    {
        path: '/page1',
        name: 'page1',
        component: () => import('../pages/page1.vue'),
        hidden: false
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('../pages/page2.vue'),
        hidden: false
    },
    {
        path: '/page3',
        name: 'page3',
        component: () => import('../pages/page3.vue'),
        hidden: false
    },
    {
        path: '/page4',
        name: 'page4',
        component: () => import('../pages/page4.vue'),
        hidden: true
    },
    {
        path: '/page5',
        name: 'page5',
        component: () => import('../pages/page5.vue'),
        hidden: true
    },
    {
        path: '/page6',
        name: 'page6',
        component: () => import('../pages/page6.vue'),
        hidden: true
    },
    {
        path: '/page7',
        name: 'page7',
        component: () => import('../pages/page7.vue'),
        hidden: true
    },
    {
        path: '/',
        redirect: '/page1'
    }

]