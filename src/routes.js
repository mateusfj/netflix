import { BrowserRouter, Routes, Route } from "react-route-dom";
import Assistir from "./pages/Assistir"
import Home from "./pages/Home";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/Assistir" element={ <Assistir/> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;