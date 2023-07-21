import './App.css';
import {Preview} from "./components/previewBlock/preview";
import {Custom} from "./components/customBlock/custom";
import {NewsBlock} from "./components/newsBlock/newsBlock";
import {topNews, newsList} from "./mocks";
import {Footer} from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Preview/>
      <Custom/>
      <NewsBlock topNews={topNews} newsList={newsList}/>
      <Footer/>
    </div>
  );
}

export default App;
