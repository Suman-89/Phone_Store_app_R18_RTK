import './App.css';
import Navbar from './component/Navbar';
import AllProduct from './component/AllProduct';
import { Route, Routes } from 'react-router-dom';
import CartPage from './component/CartPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<AllProduct/>}></Route>
        <Route exact path='/cart' element={<CartPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
