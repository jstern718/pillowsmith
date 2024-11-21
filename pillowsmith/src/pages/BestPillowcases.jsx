import '../App.css';
import Pillow from '../Pillow.jsx';
import TopOfPage from '../components/TopOfPage.jsx';

function BestPillowcases() {

  let pillowList = [
                     {intro: "The Best Pillowcases Overall",
                      title: "SimpleField 100% Cotton Sateen Pillowcases (2)",
                      description: "The SimpleField (standard) pillowcases (which come in sets of 2) are 100% cotton and made with a sateen weave. They have a 400 thread count, are 20x26 inches and come in dark gray, silver gray, stone gray, navy blue, light blue, and white.",
                      link: "https://amzn.to/3UkGPTJ"},
                     {intro: "The Best All Around Pillowcases",
                      title: "Bedsure 100% Cotton Pillowcases (2)",
                      description: "The Bedsure (queen) pillowcases (which come in sets of 2) are 100% cotton. They have a 200 thread count, are 20x30 inches, and come in gray.",
                      link: "https://amzn.to/3Uhdo4Y"},
                      {intro: "The Most Affordable Pillowcases",
                        title: "Lane Linen 100% Cotton Pillowcases (2)",
                        description: "The Lane Linen (standard) pillowcases (which come in sets of 2) are 20x26 inches and made of 100% cotton. They come in a wide variety of colors and patterns.",
                        link: "https://amzn.to/4ffX9wP"},
                    ];

  let textA = "Pillowcases can be made with a lot of different materials. Polyester, Poly-blend, Cotton, Rayon, Baboo (still rayon), Silk, and Linen are all options. The problem is that with most of these, you get what you pay for. Linen can be great for hot sleepers, but affordable linen pillowcases are only kind of affordable and quite scratchy. Silk is, well, silk. People claim that bamboo is comfortable; it certainly sounds nice. But as far as we can tell it is more expensive than rayon and yet essentially the same thing.";
  let textB = "Artificial materials, like polyester and rayon are often advertised as cooling, but this just isn't the case. Sure, these pillowcases feel cool to the touch when you initally touch one. But that's because they absorb the heat from your hand. When you lay your head on one of them for more than a few minutes, that feeling of coolness disapears and what you have instead is a hotter pillow that before. Don't let yourself be fooled by this trickery";
  let textC = "What you want, if you are in the market for a good, affordable pillowcase, is something that's 100% cotton. The options below all fit that bill, and they will all be a good choice for you. They'll be cooler than pillowcases made of other materials that advertise themselves as ice cold, and they will be more breathable than pillowcases that cost much more.";
  let accordionList = [textB, textC];
  console.log("pillowcases accordionList", accordionList);


  return (
    <>
      <div>
        <article>
            <div className="w-full">
                <TopOfPage textA={textA} accordionList={accordionList}/>
                <ul className="space-y-4">
                    {pillowList.map((pillow, index) => (
                            <li key={index} className="w-full">
                                <Pillow
                                    intro={pillow.intro}
                                    name={pillow.title}
                                    num={index + 1}
                                    link={pillow.link}
                                    description={pillow.description}
                                    className="w-full bg-white p-4 rounded shadow pillow-text"/>
                            </li>
                    ))}
                </ul>
          </div>
        </article>
      </div>
    </>
  )
}

export default BestPillowcases;
