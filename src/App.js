import './App.css';
import {Preview} from "./components/previewBlock/preview";
import {Custom} from "./components/customBlock/custom";
import {NewsBlock} from "./components/newsBlock/newsBlock";

function App() {
  return (
    <div className="App">
      <Preview/>
      <Custom/>
      <NewsBlock/>
    </div>
  );
}

export default App;
