import React, {Component} from 'react'
import {HeaderWrapper, Container, Logo, NavBar, NavItem, Additional, Botton, Search} from './style'

class Header extends Component{
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Logo/>
          <NavBar>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right letter'>Aa</NavItem>
            <Search placeholder='搜索'/>
          </NavBar>
          <Additional>
            <Botton className='reg'>注册</Botton>
            <Botton className='writting'>写文章</Botton>
          </Additional>
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header