import logo from './images/Logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Лого" className="header__logo" />
      </header>
    </div>
  );
}

export default App;
