
import './App.css';

function HomeCard( props ) {
    const  {link, title, image} = props;
    console.log("HomeCard link: ", link);
    console.log("HomeCard CardTitle: ", title);

    // const base = "https://pillowsmith.onrender.com";
    // let newLink = base + link;
    // console.log("newLink", newLink)

return (
    <>
        <a href={link} className="home-box">
            <img src={image} alt="image" className="home-box-top rounded-t-lg"/>
            <div className="home-box-bottom flex flex-col items-stretch m-0 py-5 px-4 bg-white border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full rounded-b-lg">
                <h5 className="question-text mb-4 text font-semibold tracking-tighter text-black-900 dark:text-white text-pretty text-balance text-center">{title}</h5>
                <div className="flex justify-center">
                    <button href={link} className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-56">Learn more about {title}</button>
                </div>
            </div>
        </a>
    </>
)
}

export default HomeCard

