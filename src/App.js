import Home from './pages/home';
import navBar from './pages/navBar';


function App() {
  return (
    <div className="app">
      <navBar />
       <div className="content">
        <Home />
       </div>
    </div>
  );
}

export default App;
