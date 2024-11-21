import { useState } from 'react';
import '../App.css';
import Pillow from '../Pillow.jsx';
import Accordion from '../components/Accordion.jsx';
import catHeroWide from "../assets/hero6.jpg"
import cooling_chart from "../assets/cooling_pillows.png"

function Cooling() {
  const [count, setCount] = useState(0)

  let pillowList = [
                    {intro: "The Best Basic Shredded Memory Foam Pillow For For People Who Don't Sleep Hot",
                      title: 'Coop Home Goods Original Adjustable Pillow, Queen Size Bed Pillows for Sleeping,',
                      description: "This is one of the pillows that started the shredded memory foam craze. It's a good option for people who want a supportive pillow as long as you aren't a hot sleeper. It is adjustable, which is important because shredded memory foam pillows don't really compress as much as down or down alternative pillows. This can cause you to wake up with neck pain if you don't have the option to take some foam out of the pillow to adjust it to the correct height.",
                      link: "https://amzn.to/4eATmti"},
                    {intro: "The Best Shredded Foam Pillow for People Who Sleep Hot",
                      title: "Sleep On Latex - Natural Latex Shredded Foam Pillow",
                      description: "Ok - we're coloring a bit outside of the lines here - but if you want a shredded foam pillow and you sleep hot, get nightsweats, feel like you are never going to make it through the summer and/or winter in your heated apartment, you really just can't get a memory foam one. This is where latex comes in. We here at Pillowsmith are not really fan's of the word natural - everything that exists is natural - but latex is found coming out of rubber trees in closer to it end form than something like memory foam, which humans essentially made up. Latex doesn't absorb heat in the same way that memory foam does. It's also a bit more springy, which can be a good thing or a bad thing depending on your preference.",
                      link: "https://amzn.to/3YJqxow"},
                    {intro: "The Best Shredded Foam Pillow For People With Money to Burn",
                      title: "Purple Harmony Pillow (Medium)",
                      description: "The Purple Harmony Pillow is a shredded latex foam pillow which, through some unseen magic, manages to feel more like a slightly more supportive version of a down alternative pillow. Who knows how they do it. And they don't stop there. Just because latex is cooler than memory foam, that does mean that the geniuses behind the hex-grid bed are going to leave some extra cooling on the table. So, this pillow also has a hex-grid layer meant to keep you extra cool. It's a pricey option, but if you've got the money, it might just be worth it.",
                      link: "https://amzn.to/4fvKuq5"},
                    {intro: "The Best Shredded Memory Foam Pillow For People Who Sleep Hot But Don't Like the Feel of Latex",
                      title: "Berklan Harmony Pillow Grid Cooling Surface, Ultra Soft Shredded Memory Foam Pillow Core, for Side Back Stomach and Hot Sleepers",
                      description: "If you read the description of the Purple Harmony Pillow and thought, 'I don't want to spend that much money on a pillow,' this is the pillow for you. This arguable dupe has a similar grid cooling surface, but it uses regular memory foam on the inside to keep the price down. If you want to live in the lap of luxury but don't quite have the budget to match, this might be the pillow for you",
                      link: "https://amzn.to/4fUyPAW"},
                    {intro: "The Best Shredded Memory Foam Pillow For People whith Neck And Back Issues",
                      title: "Coop Home Goods Original Cut-Out Adjustable Pillow, Queen Size Bed Pillows for Neck & Head Support",
                      description: "Neck and back pain take a thousand different forms, and cause people need a thousand different pillow shapes. Most neck and back pillows are made out of solid foam, but this can suck if you're in pain or if you're uncomfortable and just aren't a solid foam kind of person. This pillow seeks to address the problem of how your neck and shoulder fit into the pillow. If you're anything like us, you every five to ten minutes you have to adjust your pillow by scrunching it into the space between you neck and shoulder. This is necessary because your shoulder keeps you from getting far enough onto the pillow to be supported properly. By cutting a hole out for your shoulder to go in, this pillow tries to solve that problem. It's not for everyone - some people prefer a gentler crescent like shape or even a more agressively hard neck support - but it is definitely worth finding out if it helps.",
                      link: "https://amzn.to/3Zajo2e"},
                    {intro: "More Affordable Alternative Best Shredded Memory Foam Pillow For People whith Neck And Back Issues",
                        title: "Sidney Sleep Pillow for Side and Back Sleepers - Comfort for Neck and Shoulder Pain",
                        description: "This is a somewhat more affordable pillow meant to solve the neck/shoulder support issue. Instead of having a stark cut out for the shoulder, this pillow takes the shape of a crescent. This allows you to rest your head farther into the pillow without fundamentally changing how you interact with the edge of the pillow. If you have tried the cut out pilloww and it wasn't for you, or if you just want to try something a bit different, this might be the pillow for you.",
                        link: "https://amzn.to/4fQkbL8"},
                    {intro: "The Best Affordable Shredded Memory Foam Pillow",
                      title: "ACCURATEX Hybrid Pillow for Sleeping, Adjustable Shredded Memory Foam Pillow Core with Fluffy Down Alternative Fill Removable Cotton Cover",
                      description: "This pillow is a bit of a wildcard. It is very affordable. But it also has some good ideas behind it. Here, the shredded memory foam core is fully adjustable. It is also covered by a small layer of down alternative pillow. It's debatable whether this really cools the pillow down, since this layer insn't really thick enough to create a lot of air flow. But it does give this pillow a bit more of the floofiness that down alternative pillows have. If you're looking for an affordable shredded memory foam pillow that is a bit more like what you're used to, this might be the pillow for you.",
                      link: "https://amzn.to/3Cs5GP9"}
                    ];


  let textA = "What you first start comparing pillows, shredded memory foam pillows seem like a good compromise between the support offered by solid memory foam pillows and the luxurious fluffiness of down and down alternative pillows. This can be true, but there are a lot of important caveats. One of these caveats is that shredded memory foam pillows are often aggressively high. Because they don't collapse down as much under the weight of your head (like with down or down alternative pillows) this can be a real pain in the neck. Thats why we almost always recommend buying adjustable versions of these pillows. This way, you can take foam out of the pillow until it is the right height for you.";
  let textB = "Another caveat is that shredded memory foam pillows also get extremely hot. The foam itself absorbs a lot of your body heat (even more than solid memory foam because your head and neck sink further into it). As you lay on it, shredded memory foam absorbs more and more heat, going further and further up in temperature. On top of this, shredded memory foam pillows don't benefit from some of the ways in which solid memory foam pillows can prevent overheating. Claims of gel cooling material in the foam are usually not to be trusted, or have an almost unnoticable effect. And, likely because shredded memory foam his fairly heavy, pillow companies seem to have gotten together and agreed to sell them with thick polyester lining material, which does even more to lock in the heat.";
  let textC = "There are two ways to get around the heat problem. The first is to swap out memory foam for latex, which doesn't absorb anywhere near as much heat. Latex can sometimes be a take it or leave it proposition, with many pillow buyers finding it a bit too springy. While this is still somewhat of an issue with shredded latex, it is less of an issue here than with solid latex pillows.";
  let textD = "The second way to get around the heat is for the pillow to have a cooling surface on it. As we've said elsewhere in this guide, most cooling pillow covers only cool you for the first minute or two before causing you and your pillow to reach and new higher equilibrium temperature. But there are some materials that can help. A full gel layer on the pillow is one such option, but it tends to only be available for solid latex pillow. For shredded foam pillows, the best options seems to be a grid pattern undearneath the liner or pillowcase. This was pioneared by Purple, and we've included them as a pricey option below, but other companies have tried to make the same thing work for less money.";
  let accordionList = [textB, textC, textD];


  return (
    <>
      <div>
        <p className = "affiliate-desktop text-sm">*When you buy through our links, we may earn a commission. </p>
        <img src={catHeroWide} alt="cat hero" className="hero-img w-full"/>
      </div>
      <div className="divA justify-end">
        <article>
          <div className="divB">
            <p className = "affiliate-mobile">*When you buy through our links, we may earn a commission. </p>
            <h2 className="text-2xl font-bold mb-4 mt-3 p-3 page-title">Best Cooling Pillows (for people who sleep hot)</h2>
            <div className="divC mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                <ul className="text-md text-left m-3 ml-5 font-light list-disc">
                    <Accordion textA={textA} accordionList={accordionList}/>
                </ul>
            </div>
            <img src={cooling_chart} alt="Cooling Pillow Chart" className=" w-full"/>
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
