/* Layout */
import Layout from '@/layout'

const contentRouter = [
    {
        path: '/table',
        component: Layout,
        redirect: '/table/flexTable',
        name: 'Example',
        meta: { title: '示例', icon: 'table' },
        children: [
            {
                path: 'flexTable',
                name: 'Table',
                component: () => import('@/views/table/flexTable'),
                meta: { title: '自适应高度表格', icon: 'table' }
            },
        ]
    }
]

export default contentRouter
