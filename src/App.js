import "./App.scss";
import ReactCustomModal from "./lib/ReactCustomModal";

function App() {
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <button type="button" className="btn">
        Open me !
      </button>
      {/*<ReactCustomModal label="Email Address" placeholder="name@example.com" />*/}
    </div>
  );
}

export default App;
