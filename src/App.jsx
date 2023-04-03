import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { useState } from 'react'
import Logo from './assets/logo.svg';

const { Header, Content, Footer, Sider } = Layout
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem('数据看版', '1', <PieChartOutlined />),
  getItem('餐桌管理', '2', <DesktopOutlined />),
  getItem('活动配置', 'sub1', <UserOutlined />),
  getItem('系统设置', 'sub2', <TeamOutlined />, [
    getItem('菜单设置', '6'),
    getItem('包间管理', '8'),
    getItem('进货管理', '9'),
    getItem('员工管理', '10'),

  ]),
]

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100vw'
      }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 32,
            margin: 16,
          }}
        >
          <img src={Logo} alt="" style={{maxHeight: '100%', maxWidth: '100%'}}/>
          <span style={{color: '#fff', fontSize: '16px', fontWeight: '600', marginLeft:'8px'}}>青利饭店</span>
          </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}>
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}>
          青利饭店 ©2023 
        </Footer>
      </Layout>
    </Layout>
  )
}
export default App
