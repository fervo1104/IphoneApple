//se importan los componentes header y footer y el enrautador de react-router-dom
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"

import "../css_components/App.css"


import AppRoutes from "./approuter.jsx"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="contenido">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;