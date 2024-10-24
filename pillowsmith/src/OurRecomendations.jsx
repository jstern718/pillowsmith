import { useState } from 'react';
import './App.css';
import Pillow from './Pillow.jsx';

function OurRecomendations() {
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
                     {title: "Bedsure Pillows",
                      description: "The Bedsure Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester microfiber cover and a 100% polyester microfiber fill. They are approximately 9 1/2 inches thick.",
                      link: "https://amzn.to/482LPC7"},
                     {title: "Viewstar Pillows",
                      description: "The viewstar Pillows (queen) (which come in sets of 2) are down alternative pillows with a polyester cover and a microfiber fill. They have a gusseted design.",
                      link: "https://amzn.to/3zVd30K"}
                    ];
  let cardNumber = pillowList.length;

  return (
    <>
      <div>
        <article>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Most Popular Pillows</h2>
            <ul className="space-y-4">
                {pillowList.map((pillow, index) => (
                        <li key={index} className="w-full">
                            <Pillow
                                name={pillow.title}
                                num={index + 1}
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

export default OurRecomendations
