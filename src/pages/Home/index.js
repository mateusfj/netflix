import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import Category, {categoria , filterCategory} from "../../components/Category";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Conteiner>

                {categoria.map((category, index) =>
                    <Category category={category} key={category}>
                        {
                            filterCategory(index).map(filme => {
                                return <Card id={filme.id} key={filme.id}></Card>
                            })
                        }
                    </Category>
                )
                }{
                }


            </Conteiner>
            <Footer />
        </div>
    );
}

export default Home;