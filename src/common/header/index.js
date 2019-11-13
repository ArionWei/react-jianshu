import React, {Component} from 'react'
import {HeaderWrapper, Container, Logo, NavBar, NavItem, Additional, Botton, Search, SearchWrapper} from './style'

class Header extends Component{
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Logo/>
          <NavBar>
            <NavItem className='left active'><span className="iconfont">&#xe627;</span>首页</NavItem>
            <NavItem className='left'><span className="iconfont">&#xe61a;</span>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right letter'><span className="iconfont">&#xe636;</span></NavItem>
            <SearchWrapper>
              <Search placeholder='搜索' />
              <span className="iconfont">&#xe688;</span>
            </SearchWrapper>
          </NavBar>
          <Additional>
            <Botton className='reg'>注册</Botton>
            <Botton className='writting'><span className="iconfont">&#xe61b;</span>写文章</Botton>
          </Additional>
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header