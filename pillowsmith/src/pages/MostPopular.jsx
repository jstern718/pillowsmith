import { useState } from 'react';
import '../App.css';
import Pillow from '../Pillow.jsx';
import Accordion from '../Accordion.jsx';

function MostPopular() {
  const [count, setCount] = useState(0)

  let pillowList = [
                    {title: "Beckham Hotel Collection Bed Pillows",
                     description: "The Beckham Hotel Collection Bed Pillows (standard/queen) (which come in sets of 2) are down alternative pillows with 100% polyester filling and a 250 thread count cotton cover. They are about 4 1/2 inches thick.",
                     link: "https://amzn.to/4eUVyfQ"},
                     {title: "Utopia Bedding Bed Pillows",
                      description: "The Utopia Bedding Bed Pillows (queen) (which come in sets of 2) are down alternative pillows with polyester fill, a 200 thread count polycotton cover, and 2 inch gussets with corded edges. They are approximately 7 or 8 inches thick.",
                      link: "https://amzn.to/3A4Hcuq"},
                     {title: "Coop Home Goods Original Adjustable Pillow",
                      description: "The Coop Home Goods Original Adjustable Pillow (queen) is made with cross cut memory foam. It has an outer cover made of polyester (60%) and rayon (40%). It's thickness is measured at 8 inches.",
                      link: "https://amzn.to/3YkqfFX"},
                     {title: "Bedsure Down Alternative Pillows",
                      description: "The Bedsure Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester microfiber cover and a 100% polyester microfiber fill. They are approximately 9 1/2 inches thick.",
                      link: "https://amzn.to/482LPC7"},
                     {title: "Viewstar Down Alternative Pillows",
                      description: "The Viewstar Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester cover and a microfiber fill. They have a gusseted design.",
                      link: "https://amzn.to/3zVd30K"}
                    ];
  let cardNumber = pillowList.length;


  let textA = "The most popular pillows on Amazon are all on the      fluffy/high side. They are best for people who like to sleep on their backs - Some side sleepers might like them, but only if they need a higher pillow.";
  let textB = "All of these pillows are popular because they offer a good deal and come in packs of two. If you prefer fluffy pillows, and/or you need to buy a lot of pillows while furnishing a new house, these will be a good option for you.";
  let textC = "If you aren't too concerned about price, see our list of the best fluffy pillows.";
  let accordionText = {textA, textB, textC};


  return (
    <>
      <div>
        <article>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 p-3 page-title">Most Popular Pillows</h2>
            <div className="mx-0 mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                <ul className="text-sm text-left m-3 ml-5 font-light list-disc">
                    <Accordion props={accordionText}/>
                </ul>
            </div>
            <ul className="space-y-4">
                {pillowList.map((pillow, index) => (
                        <li key={index} className="w-full">
                            <Pillow
                                name={pillow.title}
                                num={index + 1}
                                link={pillow.link}
                                description={pillow.description}
                                className="w-full bg-white p-4 rounded shadow"/>
                        </li>
                ))}
            </ul>
          </div>
        </article>
      </div>
    </>
  )
}

export default MostPopular