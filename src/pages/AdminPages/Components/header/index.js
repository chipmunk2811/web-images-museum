import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => (
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="2">
        <Link to="/admin/images">Custom Images</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/admin/setting">Settings</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default AppHeader;