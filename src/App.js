import './App.css';
import Feed from './components/Feed';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <div className="flex container max-w-7xl mx-auto ">
      <Menu />
      <Main />
      <Feed />
    </div>
  );
}

export default App;
