import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skill from "./components/Skill"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Project from "./components/Project"
import { useState } from "react"

const navItems = [
  {
    id: 1,
    title: "home"
  },
  {
    id: 2,
    title: "about"
  },
  {
    id: 3,
    title: "timeline"
  },
  {
    id: 4,
    title: "skills"
  },
  {
    id: 5,
    title: "projects"
  },
  {
    id: 6,
    title: "contact"
  }
];

function App() {
  // const selectedItem = navItems.find(item => item.id === 5);
  const [nav, setNav] = useState(false);

  function navHandler() {
    setNav(!nav);
  }

  return (
    <div className="bg-[url('/Animated_Shape.svg')] bg-fixed bg-cover flex flex-col">
      <Navbar nav={nav} setNav={setNav} navHandler={navHandler} navItems={navItems} />
      <div>
        <Home />
        <hr />
        <About />
        <hr />
        <Timeline />
        <hr />
        <Skill />
        <hr />
        <Project />
        <hr />
        <Contact />
        <hr />
      </div>
    </div>
  )
}

export default App
