
import '../App.css';
import HomeCard from '../HomeCard.jsx';

import catHeroWide from "../assets/hero4.jpeg";
import fatPillow from "../assets/fat_pillow.jpg";
import thinPillow from "../assets/thin_pillow.jpg";
import pillowcasesImg from "../assets/pillowcases.jpg";

function Home() {

  let pillowList = [
        {title: "Popular Pillows", link: "pages/most-popular", image: fatPillow},
        {title: "Thin Pillows", link: "pages/thin", image: thinPillow},
        {title: "Pillowcases", link: "pages/best-pillowcases", image: pillowcasesImg}
    ];


return (
    <>
        <img src={catHeroWide} alt="cat hero" className="hero-img w-full"/>
        <div>
            <article>
                <div className="w-full">
                    <div className="home-title-div p-3 m-3">
                        <h2 className="text-4xl text-blue-500  font-bold my-4">Pillowsmith:</h2>
                        <h3 className="text-3xl text-blue-400  font-bold my-4">Sleep like a kitten 🐈</h3>
                    </div>

                    <div className="flex flex-wrap mx-0 mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                            {pillowList.map((type, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
                                            <HomeCard
                                                    title={type.title}
                                                    link={type.link}
                                                    image={type.image}
                                                    className="w-full bg-white p-4 rounded shadow"/>
                                    </div>
                            ))}
                    </div>
                </div>
            </article>
        </div>
    </>
)
}

export default Home
