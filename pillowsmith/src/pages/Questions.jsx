import '../App.css';
import QuestionItem from '../QuestionItem.jsx';
import TopOfPage from '../components/TopOfPage.jsx';

function Questions() {

  let pillowList = [
                    {question: "I like how my old worn out pillow feels, but I want to get something new.",
                        title: "Downlite down alternative pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                     {question: "I want a big fluffy pillow that feels like sleeping on a cloud.",
                        title: "Casper pillow",
                        description: "???",
                        see_also: "Best fluffy pillows",
                        link: "???"},
                    {question: "What about medium pillows. I want something that is fluffy but not too fluffly.",
                        title: "???",
                        description: "???",
                        see_also: "Best fluffy pillows",
                        link: "???"},
                     {question: "I like fluffy pillows, but I think down alternative feels cheep and collapses too quickly.",
                        title: "PureDown",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "Fluffy pillows don't provide enough support for me, what type of foam pillows do you recommend?",
                        title: "? foam pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "Actually, I wake up with a stiff neck. What type of pillow would reduce my neck and back pain?",
                        title: "? cervical pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "My cervical pillow helps, but I still wake up with back pain, is there anything I can do?",
                        title: "leg pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "In addition to my neck, my arm hurts when I sleep on my side. Is there a pillow that would help prevent me from having to constantly switch sides?",
                        title: "hand space pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                     {question: "I don't like how low and firm a lot of foam pillows are. What type of foam pillow would you recommend",
                        title: "shredded foam pillow coop",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I like high pillows, but I sleep hot and foam pillows make me sweat. I'm sick of seeing recommendations for pillows that will make this even worse. What should I do?",
                        title: "shredded latex pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I like low pillows, but I sleep hot and foam pillows make me sweat. I'm sick of seeing recommendations for pillows that will make this even worse. What should I do?",
                        title: "buckwheat pillow or cooling pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I don't really know what I want. What are other people buying?",
                        title: "most popular",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "Ok, it seems like everyone is looking for a bargain, tell me what pillows are the most highly rated",
                        title: "Highest rated",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I'm not really sure what I'm looking for, but I want a really good deal! What should I look at?",
                        title: "best deals",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I'm a stomach sleeper. What kind of pillow is for me?",
                        title: "thin pillow, downlite",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I'm a side sleeper. What kind of pillow is for me?",
                        title: "medium pillow, foam or down/down alternative",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I'm a back sleeper. What kind of pillow is for me?",
                        title: "fluffy pillow",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    {question: "I just spent all of this money on a weirdly shaped pillow, do I need to buy new pillowcases?",
                        title: "???",
                        description: "???",
                        see_also: "Best low profile pillows",
                        link: "???"},
                    ];

  let textA = "The most popular pillows on Amazon are all on the      fluffy/high side. They are best for people who like to sleep on their backs - Some side sleepers might like them, but only if they need a higher pillow.";
  let textB = "All of these pillows are popular because they offer a good deal and come in packs of two. If you prefer fluffy pillows, and/or you need to buy a lot of pillows while furnishing a new house, these will be a good option for you.";
  let textC = "If you aren't too concerned about price, see our list of the best fluffy pillows.";
  let accordionList = [textB, textC];

  return (
    <>
      <div className="outlet-div">
        <article>
            <TopOfPage textA={textA} accordionList={accordionList}/>
            <ul className="space-y-4">
                {pillowList.map((pillow, index) => (
                        <li key={index} className="w-full">
                            <QuestionItem
                                link={pillow.link}
                                num={index + 1}
                                question={pillow.question}
                                answer={pillow.answer}
                                name={pillow.title}
                                description={pillow.description}
                                className="w-full bg-white p-4 rounded shadow pillow-text"/>
                        </li>
                ))}
            </ul>
        </article>
      </div>
    </>
  )
}

export default Questions
