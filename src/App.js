import React from 'react';
import { Globalstyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import Header from './common/header'

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <IconFont />
      <Header/>
    </div>
  );
}

export default App;
