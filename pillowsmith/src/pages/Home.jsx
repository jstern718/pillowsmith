import { useState } from 'react';
import '../App.css';
import Pillow from '../Pillow.jsx';
import Accordion from '../accordion.jsx';

function Home() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <article>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 p-3 page-title">Pillowsmith Home</h2>
            <div className="mx-0 mt-0 mb-5 p-2 pb-1 bg-indigo-200 rounded-lg border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Home
