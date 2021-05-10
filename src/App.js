import React,{useContext} from 'react';

import {Mycontext} from './context';
import Stage1 from './components/stage_1';
import Stage2 from './components/stage_2';

function App() {
  const Context = useContext(Mycontext);
  console.log(Context);
  return (
    <div className="wrapper">
       <div className="center-wrapper">
       <h1>Who Pays The Bill</h1>
       {Context.state.stage===1?<Stage1/>:<Stage2/>}
       </div>


    </div>
  )
}

export default App;
