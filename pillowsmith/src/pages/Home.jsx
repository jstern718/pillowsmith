
import React from 'react';
import Typed from 'typed.js';

import '../App.css';
import HomeCard from '../HomeCard.jsx';

import catHeroWide from "../assets/hero6.jpg";
import fatPillow from "../assets/fat_pillow.jpg";
import thinPillow from "../assets/thin_pillow.jpg";
import pillowcasesImg from "../assets/pillowcases.jpg";

import { affiliateText } from '../utils-text.jsx';
let affiliateWording = affiliateText();

function Home() {

//   const motto = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(motto.current, {
//       strings: [
//           'SLEEP LIKE A <span style="color: red; "><b">MONKEY?</b></span>^500', 'SLEEP LIKE ^500 A <span style="color: red"><b">FISH?</b></span>^500',
//           'SLEEP LIKE ^500 A <span style="color: green; text-decoration: underline"><b">KITTEN!</b></span>^500'],
//       typeSpeed: 120,
//       backSpeed: 40,
//       smartBackspace: true,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

  let pillowList = [
        {title: "Popular Pillows", link: "pages/most-popular", image: fatPillow},
        {title: "Thinner Pillows", link: "pages/thin", image: thinPillow},
        {title: "Cooling Pillows", link: "pages/cooling", image: fatPillow},
        {title: "Memory Foam", link: "pages/memory-foam", image: thinPillow},
        {title: "Shredded Foam", link: "pages/shredded-foam", image: fatPillow},
        {title: "Pillowcases", link: "pages/best-pillowcases", image: pillowcasesImg}
    ];


return (
    <>
        <div>
          <p className = "affiliate-desktop text-sm text-pretty">{affiliateWording}</p>
          <img src={catHeroWide} alt="cat hero" className="hero-img w-full"/>
        </div>
        <div>
            <article>
                <div className="w-full">
                    <div className="home-title-div p-2 m-2">
                        {/* <p className = "affiliate-mobile">{affiliateWording}</p> */}
                        {/* <h2 className="text-4xl text-blue-500  font-bold my-4">PILLOWSMITH ... Sleep Like A Kitten! 🐈</h2> */}
                        {/* <h3 className="text-3xl text-blue-400  font-bold my-4"><span ref={motto} /> 🐈</h3> */}
                        {/* <h3 className="text-3xl text-blue-400  font-bold my-4"><span /> SLEEP LIKE A KITTEN! 🐈</h3> */}

                    </div>

                    <div className="flex flex-wrap mx-0 mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                            {pillowList.map((type, index) => (
                                    <div key={index} className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-2">
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
