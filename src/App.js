import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import NavBar from './pages/navBar'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
          <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
