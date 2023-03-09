import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, CategoryProduct, ProducSingle, Search, Cart } from './pages'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Footer } from './components/Footer/Footer'
import store from "./store/store"
import { Provider } from "react-redux"



const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            {/* Entrada principal */}
            <Route path="/" element={<Home />} />
            {/* Producto Simple */}
            <Route path="/product/:id" element={<ProducSingle />} />
            {/* lista de productos por categorias */}
            <Route path="/category/:category" element={<CategoryProduct />} />
            {/* cartas */}
            <Route path="/cart" element={<Cart />} />
            {/* Buscador de productos */}
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
