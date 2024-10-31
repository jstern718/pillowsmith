import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matrix from './Matrix.jsx'
import Nav from './Nav.jsx';
import MostPopular from './pages/MostPopular.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div>
        {/* <div>
            <p className="text-sm font-bold text-center">
                We rank pillows along a variety of metrics so you don't have to.
            </p>
        </div> */}

        {/* <a href="https://www.amazon.com/AIKOFUL-Siberian-Sleeping-Original-Egyptian/dp/B07VSZ51CV?th=1&linkCode=ll1&tag=pillowsmith-20&linkId=a48505c709c3201112cb64f60bda822b&language=en_US&ref_=as_li_ss_tl">Pillow Link</a> */}
      </div>
      <div>
        {/* <article className="grid gap-4 col-span-12 lg:col-span-8">
          <div>
            <h2><b>Your Custom Pillow Matrix</b></h2>
            <div>
                <Matrix />
            </div>
          </div>
        </article> */}
        <div>
            <MostPopular />
        </div>
        <br />
        <nav className="sidebar grid gap-4 col-span-12 lg:col-span-4">
            <ul className="text-left">
                <h3><b>Looking for a different metric?</b></h3>
                <br></br>
                <li>thickest</li>
                <li>thinnest</li>
                <li>a specific height</li>
                <li>fluffiest</li>
                <li>most down</li>
                <li>most affordable</li>
                <li>highest rated</li>
                <li>most popular</li>
                <li>current deals</li>
            </ul>
            <p className="text-left">Notify me when there are good deals!</p>
        </nav>
      </div>
    </>
  )
}

export default App
