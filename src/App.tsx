import './scss/timer.scss';
import React,{useState} from 'react';
import Header from './components/Header'
import Countdown from './components/Countdown/Countdown';
import Content from './components/Content';
import Drawer from './components/Drawer';
function App() {
  let [open,setOpen] = useState(false);
  let drawerHandler = () =>{
    setOpen(!open);
    document.body.classList.toggle("no-scroll");
  }
  return (
    <div className="App">
      <header className="App-header">
      <Drawer isOpen={open} closeIt={drawerHandler}>
      <div className="content">
        <h3 className="specialTitle">About us</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam delectus autem culpa. Quam aspernatur porro error dolorem magni, beatae fugiat, doloribus praesentium placeat velit dolorum accusamus laudantium quos ad id.</p>
      </div>
      </Drawer>
        <Content>
          <Header clickIcon={drawerHandler}/>
          <div className="timer-desc">
            <div className="desc">
            <h4 className="specialTitle">Comming Soon</h4>
            <p>We working on our new website,be aware!</p>
          </div>
          <Countdown dateObjectif={new Date(2023,4,25)}/>
          </div>
        </Content>
      </header>
    </div>
  );
}

export default App;
