import "./App.css";
import { Content, Header } from "./components";
function App() {
  return (
    <div className="frame">
      <Header />
      <div className="linebreak"></div>
      <Content />
      <div className="linebreak"></div>
      <div>score here</div>
      <div className="linebreak"></div>
      <div>social here</div>
    </div>
  );
}

export default App;
