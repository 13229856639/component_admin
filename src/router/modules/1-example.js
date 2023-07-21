/* Layout */
import Layout from '@/layout'

const contentRouter = [
    {
        path: '/example',
        component: Layout,
        redirect: '/example/tree',
        name: 'Example',
        meta: { title: '示例', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/example/tree/index'),
                meta: { title: 'Tree', icon: 'tree' }
            },
        ]
    }
]

export default contentRouter
