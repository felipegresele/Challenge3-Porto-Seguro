import { BrowserRouter, Route, Routes } from "react-router-dom"

//Importando pages
import Header from './pages/Header/Header'
import Chat from './pages/Chat/Chat'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import Planos from "./pages/Planos/Planos"
import Integrantes from "./pages/Integrantes/Integrantes"
import Login from "./pages/Login/Login"
import Registrar from "./pages/Registrar/Registrar"
import Faqs from "./pages/FAQS/Faqs"


function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />

      <Routes>
      <Route path="/" element={ <Home /> } /> 
      <Route path="/planos" element={ <Planos /> } />
      <Route path="/chat" element={ <Chat />} />
      <Route path="integrantes" element={ <Integrantes />} />
      <Route path="/faqs" element={ <Faqs/> }/> 
      <Route path="/login" element={ <Login/> } />
      <Route path="/registrar" element={ <Registrar/> } />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
