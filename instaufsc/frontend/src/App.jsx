import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  //pegamos as informações exportadas pelo nosso hook
  const { auth, loading } = useAuth();

  //se está no estado de carregamento, apenas indica isso para o usuário
  if (loading) {
    return <p>Carregando aplicação...</p>;
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              {/* só pode acessar a Home se estiver autenticado, senão vai para o Login */}
              <Route
                path="/"
                element={auth ? <Home /> : <Navigate to="/login" />}
              />
              {/* só pode acessar o Login se não estiver autenticado, senão vai pra Home */}
              <Route
                path="/login"
                element={!auth ? <Login /> : <Navigate to="/" />}
              />
              {/* só pode acessar o Register se não estiver autenticado, senão vai pra Home */}
              <Route
                path="/register"
                element={!auth ? <Register /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
