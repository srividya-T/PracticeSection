import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/NavComponent";

function App() {
  return (
    <div>
      <div className="stickyNav">
        <div className="container">
          <TopNav />
        </div>
      </div>
    </div>
  );
}

export default App;
