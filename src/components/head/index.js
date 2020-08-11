import React from "react";
import { Layout, Tooltip, Avatar, Menu, Dropdown } from 'antd';
import less from "less";
import "./head.less";
import {Link} from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  EditOutlined,
  RadiusSettingOutlined,
  UserOutlined,
  CaretDownOutlined
} from '@ant-design/icons';
import ColorPicker from "@/components/color-picker/index";
// import userPic from "./userPic.png";

const { Header} = Layout;
const Item = Menu.Item;

class Head extends React.Component {
  state = {
    collapsed: false,
    primaryColor: "#13C2C2",
    toolTipVisible: false,
    name: 'amdin'
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    const {onToggleChange} = this.props;
    onToggleChange(!this.state.collapsed);
  };
  handleToolTipShow() {
    this.setState({
      toolTipVisible: true
    })
  }
  handleToolTipHide() {
    this.setState({
      toolTipVisible: false
    })
  }
  handleColorChange = color => {
    console.log(color)
    this.setState({
      primaryColor: color
    })
    less.modifyVars({
      "@primary-color": color,
      "@link-color": color
    }).then(() => {
      console.log("success")
    })
  }
  handleMenuClick = (key) => {
    if(key === 'logout') {
      // TODO 登出操作
    } else if (key === 'modifyPassword') {}
  }
  render() {
    const {toolTipVisible, primaryColor} = this.state;
    const menu = (
      <Menu className="menu" selectedKeys={[]} onClick={this.handleMenuClick}>
        <Item key="modifyPassword"><EditOutlined />修改密码</Item>
        <Item><Link to="/"><RadiusSettingOutlined />设置</Link></Item>
        <Menu.Divider/>
        <Item key="logout"><LogoutOutlined />退出登录</Item>
      </Menu>
    );
    return (
      <Header className="header" style={{ padding: 0 }}>
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })}
        <div className="right">
          <Tooltip
            visible={toolTipVisible}
            placement="bottom"
            title="主颜色"
            className="action"
          >
            <div
              onMouseEnter={() => this.handleToolTipShow()}
              onMouseLeave={() => this.handleToolTipHide()}
            >
              <ColorPicker
                type="sketch"
                small
                color={primaryColor}
                presetColors={[
                  '#13C2C2',
                  '#18BFFF',
                  '#2F54EB',
                  '#722ED1',
                  '#EB2F96',
                  '#F5222D',
                  '#FA541C',
                  '#FA8C16',
                  '#FAAD14',
                  '#E1C40B',
                  '#A0D911',
                  '#52C41A',
                ]}
                onChange={this.handleColorChange}
              />
            </div>
          </Tooltip>
          <div className="action">
            <Dropdown overlay={menu} placement="bottomCenter">
              <div className="user-info">
                {/* <Avatar src={userPic} className="user-image" size="large" /> */}
                <UserOutlined className="user-image" />
                <span style={{fontSize: 14, paddingLeft: '3px'}}>{this.state.name}</span>
                <CaretDownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    )
  }
}
export default Head;