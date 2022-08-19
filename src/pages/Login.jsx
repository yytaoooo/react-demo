import { Button, Checkbox, Form, Input } from 'antd';
import './less/Login.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {LoginApi} from '../request/api'

const Login = () => {
  const onFinish = (vals) => {
    LoginApi(vals).then(re => {
      console.log('====================================');
      console.log('change',re);
      console.log('====================================');
    })
  }
  const onFinishFailed = () => {}
  return (
    <div className='login'>
      <div className='loginBox'>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='密码' />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;