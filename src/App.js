import './App.css';
import Investment from './components/Investment';
import MaskCopy from './components/MaskCopy';
import Rectangle from './components/Rectangle';
import RectangleBelow from './components/RectangleBelow';

function App() {
  return (
    <div className="App">
      <MaskCopy />
      <Rectangle />
      <RectangleBelow />
      <Investment />
    </div>
  );
}

export default App;
