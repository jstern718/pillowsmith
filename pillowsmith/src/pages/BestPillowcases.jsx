import { useState } from 'react';
import '../App.css';
import Pillow from '../Pillow.jsx';
import Accordion from '../Accordion.jsx';

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

  let textA = "The most popular pillows on Amazon are all on the      fluffy/high side. They are best for people who like to sleep on their backs - Some side sleepers might like them, but only if they need a higher pillow.";
  let textB = "All of these pillows are popular because they offer a good deal and come in packs of two. If you prefer fluffy pillows, and/or you need to buy a lot of pillows while furnishing a new house, these will be a good option for you.";
  let textC = "If you aren't too concerned about price, see our list of the best fluffy pillows.";
  let accordionText = {textA, textB, textC};

  return (
    <>
      <div>
        <article>
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-3 p-3 page-title">Our Recommendations</h2>
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
