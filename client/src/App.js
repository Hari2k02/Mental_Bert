
import Router from './routes';
import { HashRouter } from 'react-router-dom';



function App() {
  return (
    
    <div className="App text-white overflow-hidden">
        <HashRouter>
          <Router/>
        </HashRouter>
    </div>
    
  )
}

export default App;
