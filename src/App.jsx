import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeSale from "./components/HomeSale/HomeSale";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import { height } from "@mui/system";
import Contact from "./components/Contact/Contact";
import CategoryPage from "./components/CategoriesPage/CategoryPage";
import HeaderFixed from "./components/Header/HeaderFixed";
import HomeMenu from "./components/HomeMenu/HomeMenu";
function App() {
  const [count, setCount] = useState(0);

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/catePage/:cateName" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
