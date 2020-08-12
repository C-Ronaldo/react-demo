import React from "react";
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link, withRouter } from "react-router-dom";

const { Sider } = Layout;

class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: '/'
    }
    this.props.history.listen((location) => {
      console.log("path", location);
      this.setState({pathName: location.pathname})
    })
  }
  componentDidMount() {
    this.setState({pathName: this.props.location.pathname})
  }
  render() {
    const { collapsed } = this.props;
    const {pathName} = this.state;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={[pathName]} selectedKeys={[pathName]}>
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">home</Link>
          </Menu.Item>
          <Menu.Item key="/user" icon={<VideoCameraOutlined />}>
            <Link to="/user">user</Link>
          </Menu.Item>
          <Menu.Item key="/hh" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
export default withRouter(SiderMenu);