import { useState } from 'react';
import './App.css';
import Pillow from './Pillow.jsx';

function BestPillowcases() {

  let pillowList = [
                    {title: "Lane Linen 100% Cotton Pillowcases (2)",
                     description: "The Lane Linen (standard) pillowcases (which come in sets of 2) are 20x26 inches and made of 100% cotton. They come in a wide variety of colors and patterns.",
                     link: "https://amzn.to/4ffX9wP"},
                     {title: "SimpleField 100% Cotton Sateen Pillowcases (2)",
                      description: "The SimpleField (standard) pillowcases (which come in sets of 2) are 100% cotton and made with a sateen weave. They have a 400 thread count, are 20x26 inches and come in dark gray, silver gray, stone gray, navy blue, light blue, and white.",
                      link: "https://amzn.to/3UkGPTJ"},
                     {title: "Bedsure 100% Cotton Pillowcases (2)",
                      description: "The Bedsure (queen) pillowcases (which come in sets of 2) are 100% cotton. They have a 200 thread count, are 20x30 inches, and come in gray.",
                      link: "https://amzn.to/3Uhdo4Y"},
                    ];
  let cardNumber = pillowList.length;

  return (
    <>
      <div>
        <article>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Best Pillowcases</h2>
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

export default Pillowcases;
