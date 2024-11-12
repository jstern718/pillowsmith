import { useState } from 'react';
import '../App.css';
import Pillow from '../Pillow.jsx';
import Accordion from '../Accordion.jsx';

function Cooling() {
  const [count, setCount] = useState(0)

  let pillowList = [
                    {intro: "The Best Low Profile Pillow Out There",
                     title: "DOWNLITE Flat & Soft Down Pillow",
                     description: "Downlite is the n'est plus ultra of thin pillow brands. The Flat & Soft Down Pillow is made with 75% white duck down. It is about 2 inches thick, but the high down content means that 2 inches can turn into 8 inches if you fluff it up. It is a little on the expensive side, but it is worth it.",
                     link: "https://amzn.to/4eUVyfQ"},
                    {intro: "The Best Low Profile Pillow For Fans of Memory Foam",
                      title: "BLISSBURY Stomach Sleeping Pillow - Thin Memory Foam Pillow for Stomach Sleepers",
                      description: "There is a lot of competition in this part of the market. If you know the exact hight you want to the tenth of an inch, you can probably find it. But if you're not sure yet, Blissbury is starting to make a name for itself as a good option. This pillow is 3.3 inches thick, but you can also get an even thinner version that it only is 2.6 inches.",
                      link: "https://amzn.to/3A4Hcuq"},
                    {intro: "The Best Extra Thin Down Pillow",
                      title: "DOWNLITE Down Extra Thin, Flat & Soft Pillow for Stomach Sleepers",
                      description: "If you like what Downlite is offering, but you think a pillow that can be fluffed up to 8 inches in height just isn't going to do it for your neck, they offer an even thinner option. This pillow can fluff up to 6 inches. With your head on it, that goes down to maybe 1 inch. It is hard to measure at that end of the spectrum. This pillow is also great if you want a good new pillow to supplement your old pillow that has seen better days but is just too perfect to throw out.",
                      link: "https://amzn.to/3A4Hcuq"},
                    {intro: "The Best Affordable Low Profile Pillows Made From Down Alternative",
                      title: "Acteb Ultra Thin Flat Soft Bed Pillows (2 Pack)",
                      description: "It can be suprising hard to find low profile down alternative pillows. That's why most people end up realizing that this is what they want when someone asks them to replace the raggedy pillow they're already using. Acteb is on of the few manufacturers in this space. They're two for one deal is also quite affordable. Having two thin pillows lets you experiment with how to arrange them so that you can find the perfect, most comfortable angele for you.",
                      link: "https://amzn.to/3A4Hcuq"},
                      {intro: "The Best Firm Low Profile Pillow (that is also great for people who sleep hot)",
                        title: "SUQ I OME Adjustable Slim Sleeper -Thin Flat Latex Pillow for Sleeping with 2 Removable Layers",
                        description: "Latex is a really great material for people who can't get enough support from foam or down alternative pillows. It is more springy, but still molds to your head. This pillow is adjustable, and you can choose to make it 1, 2.5 or 3.5 inches",
                        link: "https://amzn.to/3A4Hcuq"},
                    ];

  let cardNumber = pillowList.length;


  let textA = "It can be really hard to find a good low profile or thin pillow. Often, small differences in height can be the difference between blissful sleep and a night of tossing and turning.";
  let textB = "We looked high - and especially - low to find a number of low profile pillows for you to choose between.";
  let textC = "We've tried to offer a bunch of different options, from down to down alternative and from memory foam to latex";
  let accordionText = {textA, textB, textC};


  return (
    <>
      <div className="divA justify-end">
        <article>
          <div className="divB">
            <h2 className="text-2xl font-bold mb-4 p-3 page-title">Best Cooling Pillows (for people who sleep hot)</h2>
            <div className="divC mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                <ul className="text-sm text-left m-3 ml-5 font-light list-disc">
                    <Accordion props={accordionText}/>
                </ul>
            </div>
            <ul className="space-y-4">
                {pillowList.map((pillow, index) => (
                        <li key={index} className="w-full">
                            <Pillow
                                intro={pillow.intro}
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

export default Cooling
