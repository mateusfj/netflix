import Slide from "../../components/Slider";
import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import Category, {categoria , filterCategory} from "../../components/Category";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";




function Home() {
    return (
        <div>
            <Banner />
            <Conteiner>

                {categoria.map((category, index) =>
                    <Category category={category} key={category}>
                        <Slide>
                            {
                                filterCategory(index).map(filme => {
                                    return <Card id={filme.id} key={filme.id}></Card>
                                })
                            }
                        </Slide>
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