import SliderCard from "../../components/SliderCard";
import SliderBanner from "../../components/SliderBanner";
import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import Category, {categoria , filterCategory} from "../../components/Category";
import Conteiner from "../../components/Conteiner";
import Footer from "../../components/Footer";

const imageList = ["onepiece", "deadpool", "naruto"]


function Home() {
    return (
        <div >
           <SliderBanner>
                {
                    imageList.map(imageNome =>(
                        <Banner imageNome={imageNome}/>
                    ))
                }
           </SliderBanner>
            
            <Conteiner>

                {categoria.map((category, index) =>
                    <Category category={category} key={category}>
                        <SliderCard>
                            {
                                filterCategory(index).map(filme => {
                                    return <Card id={filme.id} key={filme.id}></Card>
                                })
                            }
                        </SliderCard>
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