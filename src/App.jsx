import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { height } from "@mui/system";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<div style={{height: '1000px'}}><p></p></div>} />{/* Thay đổi element tùy ý */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
