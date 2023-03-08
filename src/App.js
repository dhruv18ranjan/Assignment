import './App.css';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
      <Sidebar />
      </div>
      <div className='main'>

      <Main />
      </div>
    </div>
  );
}

export default App;
