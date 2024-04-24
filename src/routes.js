import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assistir from "./pages/Assistir"
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Pesquisar from "./pages/Pesquisar";
import Header from "./components/Header"



function AppRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/assistir/:id" element={ <Assistir/> }></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
                <Route path="/pesquisar" element={<Pesquisar/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;