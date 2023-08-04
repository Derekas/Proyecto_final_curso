import './App.css';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Home from './page/Home';
import Cart from './page/Cart';
import Logo from './img/comida-rapida.png';
import Cesta from './img/cesta.png';
import Dark from './img/media-luna.png';
import useQuiosco from './hooks/useQuiosco';
function App() {

  const {cesta}=useQuiosco()
  return (
      <BrowserRouter>
      <div class="bg-slate-200">
        <header>
                <div class="flex justify-between bg-slate-300">
                  <div class="">
                    <Link to="/">
                      <img class="w-10 my-4 mx-4" src={Logo} alt=""/>
                    </Link>
                  </div>

                  <div class="static">
                    {cesta.length >0 ? 
                    <div class="text-white text-center absolute top-2 h-4 w-3 text-xs bg-red-600 rounded-xl">
                      {cesta.length}
                    </div> : ""}
                    {cesta.length>0 ? 
                      <Link to="/cart">
                      <img class="w-10 my-4 " src={Cesta} alt=""/>
                      </Link>
                      :
                      <Link to="/cart" 
                      style={{ pointerEvents: 'none' }}>
                      <img class="w-10 my-4 " src={Cesta} alt=""/>
                      </Link>
                    } 
                    
                  </div>

                  <div class="">
                    <Link to="/cart">
                    <img class="w-10 my-4 mx-4" src={Dark} alt=""/>
                    </Link>
                  </div>
                </div>
              

              
            </header>
            <main class="">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
      </div>
        
      </BrowserRouter>
  );
}

export default App;
