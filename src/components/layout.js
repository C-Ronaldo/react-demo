import React from "react";
import Head from "./head";
import SiderMenu from "./sider";
import {Route} from "react-router-dom";
import { Layout } from 'antd';
import Home from "@/pages/home/index";

const { Content } = Layout;

class LayoutComponent extends React.Component {
  state = {
    collapsed: false
  }
  toggleChange = (val) => {
    this.setState({collapsed: val});
    console.log("toggleChange", val)
  }
  render() {
    const {collapsed} = this.state;
    return (
      <Layout className="layout-custom-trigger">
        <SiderMenu collapsed={collapsed}/>
        <Layout className="site-layout">
          <Head onToggleChange={this.toggleChange}/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           <Route path="/" component={Home}></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent