import './App.css'
import Bai01 from './pages/Bai_1/Bai_01';
import Bai02 from './pages/Bai_2/Bai_02';
import Bai03 from './pages/Bai_3/Bai_03';


function App() {
  return(
     <div className="App ">
      <div className="column">
        <Bai01/>
      </div>
      <div className="column">
        <Bai02/>
      </div>
      <div className="column">
        <Bai03/>
      </div>
     
    </div>
  );
 }

export default App
