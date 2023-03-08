import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeSale from "./components/HomeSale/HomeSale";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<div><p>Hello World</p></div>} /> {/*Thay đổi element tùy ý*/}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
            <HomeSale/>
            <Footer />
        </>
    );
}

export default App;
