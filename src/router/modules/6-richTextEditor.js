/* Layout */
import Layout from '@/layout'

const contentRouter = [
    {
        path: '/richTextEditor',
        component: Layout,
        redirect: '/richTextEditor/tinymceEditor',
        name: 'richTextEditor',
        meta: { title: '富文本编辑', icon: 'el-icon-document' },
        children: [
            {
                path: 'tinymceEditor',
                name: 'tinymceEditor',
                component: () => import('@/views/edit/richTextEditor/tinymceEditor'),
                meta: { title: 'tinymce' }
            }
        ]
    }
]

export default contentRouter
