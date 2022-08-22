import { DownOutlined, SmileOutlined, UpOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Table, Tag, Button } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import './less/Login.less'
import { ListApi } from '../request/api'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css'
import {TestContext} from '../App1'

const List = () => {
  const goButton = (
    <Button type='primary'>试试</Button>
  )
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ]}
    />
  );
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Address',
      dataIndex: 'subTitle',
      key: 'subTitle',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const [editor, setEditor] = useState(null)
  const [html, setHtml] = useState('<p>hello</p>')
  const editorConfig = {
    placeholder: '请输入内容！！！！'
  }
  const toolbarConfig = {}
  const [list, setList] = useState([])
  const [visit, setVisit] = useState(false)
  const location = useLocation()
  const params = useParams()
  const contextVal = useContext(TestContext)
  console.log('vvvvv',contextVal);

  const pageChange = function (page) {
    console.log(arguments);
    loadata({ num: page.current, count: page.pageSize }).then(re => {
      setPagination({
        ...pagination,
        current: re.data.num
      })
    })
  }
  const loadata = (params) => {
    return ListApi(params).then(re => {
      setList(re.data.arr)
      return re
    })
  }
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 5,
    showQuickJumper: { goButton }
  })
  console.log(visit);
  useEffect(() => {
    console.log('location',location)
    console.log('params',params);
    loadata({ num: 1, count: 5 }).then(re => {
      setPagination({
        ...pagination,
        total: re.data.total
      })
    })
  }, [])
  console.log('papa',useSearchParams());
  const [pa] = useSearchParams()
  console.log('pppp',pa);
  console.log('1111',pa.keys());
  for (const iterator of pa.values()) {
    console.log(iterator);
  }
  return (
    // <div>
    //   visit:{visit ? <h1>true</h1> : <h1>false</h1>}
    //   <Dropdown overlay={menu} onVisibleChange={(bool) => {
    //     setVisit(bool)
    //     contextVal.setTest(contextVal.test + '试试啊')
    //   }}>
    //     <a onClick={(e) => e.preventDefault()}>
    //       <Space>
    //         Hover me
    //         {visit ? <DownOutlined /> : <UpOutlined />}
    //       </Space>
    //     </a>
    //   </Dropdown>

    //   <div className='father'>
    //     <div className='child'>
    //       {pagination.total}
    //       <Table columns={columns} dataSource={list} rowKey='id' onChange={pageChange} pagination={pagination} />
    //     </div>
    //   </div>

    //   <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
    //     <Toolbar
    //       editor={editor}
    //       defaultConfig={toolbarConfig}
    //       mode="default"
    //       style={{ borderBottom: '1px solid #ccc' }}
    //     />
    //     <Editor
    //       defaultConfig={editorConfig}
    //       value={html}
    //       onCreated={setEditor}
    //       onChange={editor => setHtml(editor.getHtml())}
    //       mode="default"
    //       style={{ height: '500px', overflowY: 'hidden' }}
    //     />
    //   </div>
    //   <div style={{ marginTop: '15px' }}>
    //     {html}
    //   </div>
    // </div>
    <div>列表</div>
  );
}

export default List;
