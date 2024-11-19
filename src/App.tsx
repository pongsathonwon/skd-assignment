import "./App.css";
import { Content, Header, Social, Stat } from "./components";
function App() {
  return (
    <div className="frame">
      <Header />
      <div className="linebreak"></div>
      <Content />
      <div className="linebreak"></div>
      <Stat />
      <div className="linebreak"></div>
      <Social />
    </div>
  );
}

export default App;
