import './dist/index.css';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Chance from './components/Chance';
import Header from './components/Header';
import Cities from './components/Cities';

function App() {
  return (
    <div className="App">
      
      <div className='main_container'>
        <Header />
        <Daily />
        <Weekly />
        <Chance />
        <Cities />
      </div>

    </div>
  );
}

export default App;
