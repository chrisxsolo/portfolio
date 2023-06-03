import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import navBar from './pages/navBar'


function App() {
  return (
    <Router>
      <div className="App">
        <navBar />
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
