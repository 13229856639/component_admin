/* Layout */
import Layout from '@/layout'

const contentRouter = [
    {
        path: '/markdownEditor',
        component: Layout,
        redirect: '/markdownEditor/vditor',
        name: 'markdownEditor',
        meta: { title: 'Markdown编辑', icon: 'el-icon-document' },
        children: [
            {
                path: 'Vditor',
                name: 'Vditor',
                component: () => import('@/views/edit/markdownEditor/vditor'),
                meta: { title: 'Vditor' }
            }
        ]
    }
]

export default contentRouter
