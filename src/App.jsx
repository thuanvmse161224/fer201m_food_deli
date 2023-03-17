import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeSale from "./components/HomeSale/HomeSale";
import { height } from "@mui/system";
import Contact from "./components/Contact/Contact";
import CategoryPage from "./components/CategoriesPage/CategoryPage";
import HeaderFixed from "./components/Header/HeaderFixed";
import Cart from "./components/Cart/Cart";
import ViewCart from "./components/ViewCart/ViewCart";

function App() {
  const [count, setCount] = useState(0);

  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };


  return (
    <>
      <HeaderFixed />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p></p>
            </div>
          }
        />
        {/* Thay đổi element tùy ý */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/catePage/:cateName" element={<CategoryPage />} />
        <Route path="/viewCart" element={<ViewCart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <HomeSale />
      <ViewCart />
      <Footer />
    </>
  );
}

export default App;
