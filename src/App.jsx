import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { height } from "@mui/system";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeSale from "./components/HomeSale/HomeSale";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import Contact from "./components/Contact/Contact";
import CategoryPage from "./components/CategoriesPage/CategoryPage";
import HeaderFixed from "./components/Header/HeaderFixed";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import LoginPage from "./components/LoginPage/LoginPage";
import About from "./components/About/About";
import AllPromotions from "./components/AllPromotions/AllPromotions";

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
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomeSale />
              <HomeMenu />
            </>
          }
        />
        {/* Thay đổi element tùy ý */}

        <Route
          path="/resDetailPage/:id/:shopName/:rate/:dist/:desc/:coup/:time"
          element={<RestaurantDetails />}
        />
        <Route path="/allPromotions" element={<AllPromotions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/catePage/:cateName" element={<CategoryPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
