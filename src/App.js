import "./App.css";
import Modal from "./modal/modal";
import Summary from "./components/Summary/Summary";
import './App.css';
import Background from './pages/Background/Background.jsx';
import BackgroundAuth from './pages/BackgroundAuth/BackgroundAuth.jsx';

function App() {
  return (
    <div className="App">
      <Summary />
      {/* <h1>hi there</h1> */}
      <BackgroundAuth />
    </div>
  );
}

export default App;
