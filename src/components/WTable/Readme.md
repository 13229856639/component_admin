```html
<WTable
    :columns="columns"
    :getListMethod="getList"
    :pageNum.sync="pageNum"
    :pageSize.sync="pageSize"
    :total="total"
    :data="tableData"
    columnAlign="center"
>
    <template #age="{ row }"> 年龄：{{ row.age }} </template>
</WTable>
```

```js
// 表格配置
tableData: [],
pageNum: 1,
pageSize: 10,
total: 0,
columns: [
    {
        label: 'ID',
        prop: 'id',
        elProps: {
            width: '80px',
        },
    },
    {
        label: '类型',
        prop: 'type',
    },
    {
        label: '钻石下限',
        prop: 'coin',
    },
    {
        label: '停留时间（秒）',
        prop: 'stayTime',
    },
    {
        label: '排序',
        prop: 'sort',
    },
    {
        label: '添加时间',
        prop: 'addTime_',
    },
    {
        label: '操作',
        prop: 'tool',
        render(h, { row }) {
            return h('div', `我是 【${row.tool}】 自定义按钮`)
        },
    },
],
```