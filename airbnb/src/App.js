import './App.css';
import "./index.css";
import Navbar from "./component/navbar";
import MainContent from './component/hero';
import Card from './component/card';
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        // {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className='page-content'>
        <MainContent />
        <div className='cards-div'>
          {cards}
        </div>

      </div>
    </div>
  );
}

export default App;
