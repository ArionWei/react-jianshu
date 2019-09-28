import styled from 'styled-components'
import logoImg from '../../statics/logo.png';

const activeColor = '#ea6f5a'

export const HeaderWrapper = styled.div `
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  display: inline-block;
  width: 100px;
  height: 100%;
  background: url(${logoImg});
  background-size: contain;
`

export const NavBar = styled.div `
  width: 960px;
  color: #333;
  height: 68px;
  line-height: 68px;
`

export const Search = styled.input `
  border: none;
  height: 36px;
  background-color: #f1f1f1;
  border-radius: 18px;
  width: 140px;
  padding: 0 40px 0 20px;
  margin-left: 20px;
  outline: none;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
`

export const NavItem = styled.div `
  font-size: 16px;
  margin: 0 15px;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #666;
  }
  &.active {
    color: ${activeColor}
  }
  &.letter {
    font-family: 微软雅黑;
  }
`

export const Additional = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Botton = styled.div `
  font-size: 16px;
  border: 1px solid ${activeColor};
  height: 36px;
  line-height: 36px;
  border-radius: 20px;
  text-align: center;
  padding: 0 20px;
  margin: 0 5px 0 15px;
  color: ${activeColor};
  cursor: pointer;
  &.reg:hover {
    background-color: rgba(236,97,73,.05);
  }
  &.writting {
    background-color: ${activeColor};
    color: #fff;
  }
`