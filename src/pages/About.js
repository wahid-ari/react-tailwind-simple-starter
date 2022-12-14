import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "utils/GlobalContext";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Helmet from "react-helmet";
import Input from "components/Input";

export default function About() {
  const [darkMode, setDarkMode] = useContext(GlobalContext);
  const [counter, setCounter] = useState(0)

  return (
    <>

      <Helmet>
        <title>About Page</title>
        <meta name="description" content="Generated by create react app" />
      </Helmet>

      <main className="dark:bg-neutral-900 h-screen flex items-center justify-center flex-wrap">
        <div>
          <h1 className="text-center text-4xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-3">
            About Page
          </h1>

          <div className="flex items-center gap-x-4 my-8 justify-center">
            <Button onClick={() => setCounter(counter + 1)} className="text-base">+</Button>
            <p className="dark:text-white">{counter}</p>
            <Button onClick={() => setCounter(counter - 1)} className="text-base px-3.5">-</Button>
          </div>

          <h1 className="text-4xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-3">
            <a href="https://reactjs.org/" className="text-sky-600 hover:text-sky-700 transition-all">React.js</a>
            {' '} + {' '}
            <a href="https://tailwindcss.com" className="text-cyan-600 hover:text-cyan-700 transition-all">Tailwind CSS</a>
          </h1>

          <div className="flex justify-center">
            <div onClick={() => setDarkMode(!darkMode)} className="transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative">
              <div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1"></div>
            </div>
          </div>
          
          <div className="flex justify-center my-8 gap-x-4">
            <Link to="/" className="text-blue-500 hover:text-blue-600 transition-all font-medium">Home</Link>
            <Link to="/about" className="text-blue-500 hover:text-blue-600 transition-all font-medium">About</Link>
            <Link to="/users" className="text-blue-500 hover:text-blue-600 transition-all font-medium">Users</Link>
            <Link to="/api" className="text-blue-500 hover:text-blue-600 transition-all font-medium">Get API</Link>
          </div>

          <Input name="name" placeholder="Name" />
          <div className="flex justify-center">
            <Button>Button</Button>
          </div>

        </div>
      </main>

    </>
  )
}
