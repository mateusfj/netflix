import Header from "../../components/Header";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";
import Search from "../../components/Search";


function Pesquisar() {
    return (
        <div>
            <Header />
            <Conteiner>
                <Search />
            </Conteiner>
            <Footer />
        </div>
    );
} 


export default Pesquisar;