import { Route, Routes, Link } from "react-router-dom";

import ArticlePage from "./pages/ArticlePage";
import CatalogPage from "./pages/CatalogPage";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Inicio</div>} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/admin">
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
      ;
    </div>
  );
}

export default App;
