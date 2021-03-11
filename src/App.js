import "./App.css";
import Modal from "./modal/modal";
import GoogleLogin from "./components/GoogleLogin"

function App() {
  return (
    <div className="App">
      <Modal />
      <GoogleLogin/>
    </div>
  );
}
export default App;
