import './App.css';
import Navbar from './component/navbar';
import Card from './component/card';
import "./index.css";
import data from './data';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
