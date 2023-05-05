import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <TopMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
