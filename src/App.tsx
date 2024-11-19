import "./App.css";
import { Content, Header, Stat } from "./components";
function App() {
  return (
    <div className="frame">
      <Header />
      <div className="linebreak"></div>
      <Content />
      <div className="linebreak"></div>
      <Stat />
      <div className="linebreak"></div>
      <div>social here</div>
    </div>
  );
}

export default App;
