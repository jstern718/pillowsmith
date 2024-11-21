import '../App.css';
import Pillow from '../Pillow.jsx';
import TopOfPage from '../components/TopOfPage.jsx';

function MemoryFoam() {

  let pillowList = [
                    {intro: "The Best Memory Foam Pillow For Most People",
                      title: 'UTTU Cervical Pillow for Neck Strain Relief, Memory Foam Neck Pillow for Sleeping - Contour',
                      description: "Because memory foam in more dense than down or down alternative, it condenses less as you sleep on it. This makes it more necessary to get the proper height right to begin with. Sometimes people have to go through a bunch of different pillows before they get the height, hardness, and curve below the neck correct.Getting an adjustable memory foam pillow is a good way to avoid this process. This is a good afforable option that is a good starting out point for most people.",
                      link: "https://amzn.to/48UilXj"},
                    {intro: "The Best Memory Foam Pillow For People Who Have More To Spend",
                      title: "Casper Sleep Foam Pillow, Standard",
                      description: "One of the problems in the pillow market is that it can be really hard to distinguish between materials, especially when those materials have similar names. Sometimes, the namebrand pillow and the knockoff are made of similar materials. Sometimes they aren't. That's why it can pay to try leveling up. This is a foam pillow that really does feel like it is made with a better quality foam. The difference isn't enormous, but it is there.",
                      link: "https://amzn.to/3YJqxow"},
                    {intro: "The Best Affordable Memory Foam Pillow",
                      title: "AM AEROMAX Firm Contour Memory Foam Pillow, Cervical Pillow for Neck Pain Relief",
                      description: "Another way to get adjustability without using multiple pieces of foam is to make a pillow that has a higher side and a lower side. Fortunately, this is one of the designes - the contour pillow - that helps relieve neck pain. You still might find yourself needing the part of the pillow you use to be a bit lower or a bit higher, but this is a good starting point.",
                      link: "https://amzn.to/3OaZNZn"},
                    {intro: "The Best Memory Foam Pillow For People Who Sleep Hot",
                      title: "Comfort Revolution Blue Bubble Gel + Memory Foam Pillow, Standard",
                      description: "Not everyone likes the springiness of latex. If you're one of those people, you might have to go with a more traditional opition. Tempur-pedic has been making good, but expensive pillows for ages. Somehow, their memory foam manages to be more supportive than everyone else's. Tempur-Pedic is actually one of the few brands than has figured out how to make a cooling pillow cover that works more often than not. But it's still just a cover over a hot pillow. This pillow is a bit different. It has an internal gel layer meant to prevent the heat from building up to begin with.",
                      link: "https://amzn.to/3YUEhNo"},
                      {intro: "The Best Memory Foam Pillow For People With Neck Pain",
                        title: "DONAMA Cervical Pillow for Neck and Shoulder",
                        description: "If your looking for a reasonably priced cooling pillow, but the firmness of buckwheat hulls doesn't work for you and the propriety foam blends don't really help, this option with a gel layer might be the best option for you. The gel layer here won't keep you cool for ever, but it lasts much longer than cooling pillow covers.",
                        link: "https://amzn.to/40NtpU8"},
                      {intro: "The Best Memory Foam Pillow For People Who Sleep Hot and Have Neck Pain",
                        title: "Eucior Gel Cooling Cervical Neck Pillow",
                        description: "Not everyone likes the springiness of latex. If you're one of those people, you might have to go with a more traditional opition. Tempur-pedic has been making good, but expensive pillows for ages. Somehow, their memory foam manages to be more supportive than everyone else's. Tempur-Pedic is actually one of the few brands than has figured out how to make a cooling pillow cover that works more often than not. But it's still just a cover over a hot pillow. This pillow is a bit different. It has an internal gel layer meant to prevent the heat from building up to begin with.",
                        link: "https://amzn.to/3YUEhNo"},
                      {intro: "The Best Memory Foam Pillow For People Who Need A Thin Pillow",
                        title: "LOFE Adjustable Thin Memory Foam Pillow",
                        description: "If your looking for a reasonably priced cooling pillow, but the firmness of buckwheat hulls doesn't work for you and the propriety foam blends don't really help, this option with a gel layer might be the best option for you. The gel layer here won't keep you cool for ever, but it lasts much longer than cooling pillow covers.",
                        link: "https://amzn.to/40NtpU8"},
                      {intro: "Alternative Best Memory Foam Pillow For People Who Need A Thin Pillow",
                            title: "USlixury Adjustable Side Sleeper Pillow",
                            description: "If your looking for a reasonably priced cooling pillow, but the firmness of buckwheat hulls doesn't work for you and the propriety foam blends don't really help, this option with a gel layer might be the best option for you. The gel layer here won't keep you cool for ever, but it lasts much longer than cooling pillow covers.",
                            link: "https://amzn.to/40NtpU8"}
                    ];


  let textA = "There is a lot of competition in this part of the market. Every other pillow you see will say it's cooling. And if the ad text doesn't go that far, it will at least claim that the pillow is breathable. Most of the times neither of these things are true.";
  let textB = "The majority of cooling pillows that are called cooling pillows either just have a cooling cover or they have a gel material mixed in with their  foam. Except in rare cases, the gel doesn't do anything. The cooling covers, on the other hand, aren't really cooling at all. They will feel cool for a minute or two when you touch first lay down on them. But that's more of a problem than a solution";
  let textC = "What you can feel is the heat from your face or hand being pulled away from you and into the pillowcase. This is not nearly enough to cool your whole body; so that body part just gets hot again in a few minutes. But the heat that left you is now in the pillow, which is now hotter than even your most average non-cooling pillow. These products aren't just bad at doing what they claim to do. They actively make thinks worse, hoping to trick you. Or you might say, hoping to pull unbreathable polyester over your eyes. Forget about them, and don't look back. ";
  let textD = "People can have different opinions about the remaining options. There are pillows with cooling gel on top so that you are protected from the part of the pillow that would draw in heat. There are pillows made up of proprietary foam blends. There are pillows made of latex, which doesn't absorb heat to the extent that memory foam does. Finally, there is an even older technology from Japan, the buckwheat pillow. Ok, it's not exactly a technology. But if you're enjoy a firm pillow, this is probably the coolest option. We've tried to offer a bunch of different options, from down to down alternative and from memory foam to latex";
  let accordionList = [textB, textC];


  return (
    <>
      <div className="divA justify-end">
        <article>
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
                                className="w-full bg-white p-4 rounded shadow"/>
                        </li>
                ))}
            </ul>
        </article>
      </div>
    </>
  )
}

export default MemoryFoam
