## react简书项目小练习

### 首先安装create-react-app
```
npm install -g create-react-app
```
### 创建项目
```
create-react-app react-jianshu
```
### 将生成好的项目里src文件夹下的一些不必要的文件删除
```
App.css // 删除
App.test.js // 自动化测试文件，删除
logo.svg // 删除
serviceWorker.js // 这是帮助我们做PWA离线软件的一个文件，删除 
```
### 为了防止组件间样式的冲突，安装styled-components第三方库
    安装完成之后，重启项目，这时候我们引入样式就不再引入css文件了，我们要引入js文件。
    在js文件中，我们想要写全局样式，应该这样写
```
// style.js --> 样式文件，用createGlobalStyle定义全局样式
import { createGlobalStyle  } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
  body{
    margin: 0;
    padding: 0;
  }
`

// App.js --> 组件，在项目主文件导入样式
import React from 'react';
import { Globalstyle } from './style.js';

// 以样式组件的方式当作标签引入
function App() {
  return (
    <div className="App">
      <Globalstyle />
      hello world
    </div>
  );
}

export default App;
```
* [styled-components的一些基本用法](https://www.jianshu.com/p/2d5f037c7df9)