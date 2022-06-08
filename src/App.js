import { useEffect, useState } from 'react';
import './App.css';
import Horloge from './components/Horloge';
import Menu from './components/Menu'
import Timer from './components/Timer';

function App() {
  const [views, setViews] = useState({Horloge: '', Timer: 'collapse'});

  useEffect(() => {
    setViews({Horloge: '', Timer: 'collapse'})
  }, []);
  
  return (
    <div className="App">
      <div>
      <Menu setViews={setViews} />
      <div className="masterContainer">
        <Horloge views={views.Horloge} />
        <Timer views={views.Timer} />
      </div>
      </div>
    </div>
  );
}

export default App;
