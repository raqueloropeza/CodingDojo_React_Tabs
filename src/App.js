import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TabContent from './components/TabContent';

import './App.css';

function App() {
  const [tab, setTab] = useState({
    content: ["Whoa look at me! I'm a TAB", "WHAT!? I HAVE TWO TABS", "Three is too good to be true"],
    selectedTab: 0,
  })
  
  
  return (
    <div className= "container mt-5">
      <h1>TABS</h1>
      <TabContent tab={tab} setTab={setTab}/>
    </div>
  );
}

export default App;
