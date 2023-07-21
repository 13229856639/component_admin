/* Layout */
import Layout from '@/layout'

const contentRouter = [
    {
        path: '/list',
        component: Layout,
        redirect: '/list/cardList',
        name: 'List',
        meta: { title: '列表', icon: 'el-icon-tickets' },
        children: [
            {
                path: 'cardList',
                name: 'CardList',
                component: () => import('@/views/list/cardList/index'),
                meta: { title: '卡片列表' }
            }
        ]
    }
]

export default contentRouter
