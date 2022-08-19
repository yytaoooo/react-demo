import { DownOutlined, SmileOutlined,UpOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import './less/Login.less'
const List = () => {
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
  const [visit,setVisit] = useState(false)
  const location = useLocation()
  console.log(visit);
  useEffect(() => {
    console.log(location);
  }, [])
  return (
    <div>
    visit:{visit ? <h1>true</h1>:<h1>false</h1>}
      <Dropdown overlay={menu} onVisibleChange={(bool) => {
        setVisit(bool)
      }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            {visit ? <DownOutlined /> : <UpOutlined />}
          </Space>
        </a>
      </Dropdown>

      <div className='father'>
        <div className='child'></div>
      </div>
    </div>

  );
}

export default List;
