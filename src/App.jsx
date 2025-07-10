import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import ProductPage from "./pages/product-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/product-page" element={<ProductPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
