import './App.css';
import { Route , Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Reviews from './components/review/Reviews';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/reviews/:id" element={<Reviews/>}></Route>
   </Routes>
  );
}

export default App;
