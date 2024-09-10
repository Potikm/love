import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Pages from './components/Pages';


function App() {
 

  return (
    <div className="love" >
      <BrowserRouter >
        <Pages />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
