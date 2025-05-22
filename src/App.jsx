import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="font-bricolage">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
