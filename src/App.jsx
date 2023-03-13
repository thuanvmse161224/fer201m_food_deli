import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeSale from "./components/HomeSale/HomeSale";
import { height } from "@mui/system";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ height: "1000px" }}>
              <p></p>
            </div>
          }
        />
        {/* Thay đổi element tùy ý */}
        <Route path="/" element={<Contact />} /> {/*Thay đổi element tùy ý*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/catePage" element={<CategoryPage />} />
      </Routes>
      <HomeSale />
      <Footer />
    </>
  );
}

export default App;
