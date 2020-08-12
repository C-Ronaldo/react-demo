import React, {Suspense} from "react";
import Head from "./head";
import SiderMenu from "./sider";
import {Route, Redirect} from "react-router-dom";
import { Layout } from 'antd';
import Home from "@/pages/home/index";
import User from "@/pages/table/index";
import {getItem} from "@/utils/auth";

const { Content } = Layout;

class LayoutComponent extends React.Component {
  state = {
    collapsed: false,
    isLogin: false
  }
  toggleChange = (val) => {
    this.setState({collapsed: val});
  }
  render() {
    const {collapsed} = this.state;
    const isLogin = getItem('token') ? true : false;
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
            {
              isLogin?(
                <Suspense>
                  <Route path="/" component={Home}></Route>
                  <Route path="/user" component={User}></Route>
                </Suspense>
              ): (<Redirect to="/login" />)
            }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent