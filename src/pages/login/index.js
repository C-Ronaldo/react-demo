import React from "react";
import "./login.less";
import {Form, Input, Checkbox, Button} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from "./logo.png";
import star from "./star.png";
import {setItem} from "@/utils/auth";

class Login extends React.Component {
  state = {
    isMount: false,
    loading: false
  };

  componentDidMount() {
    this.setState({ isMount: true });
  }
  onFinish = (values) => {
    console.log(values)
    setItem('token', "1234512");
    this.props.history.push('/');
  }
  render() {
    const { isMount, loading } = this.state;
    return (
      <div className="login">
        <div className={isMount ? 'root-bg active' : 'root-bg'}>
          <div className="star-bg">
            <img src={star} alt="star" />
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>react-demo</span>
          </div>
        </div>
        <div className="form">
          <h2 className="login-title">登录</h2>
          <Form
            className="login-form"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input allowClear autoFocus prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!'}]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
            </Form.Item>
            {/* <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item> */}
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/">Forgot password</a>
            </Form.Item>

            <Form.Item>
              <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button" 
              loading={loading}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default Login;
