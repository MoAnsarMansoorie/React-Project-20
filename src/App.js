
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random Color */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      <StarRating noOfStar={10}/>
    </div>
  );
}

export default App;
