import './App.css';
import Feed from './Feed';
import Sidebar from './sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
