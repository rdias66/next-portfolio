import { Home } from '@/app/sections/home'
import { About } from '@/app/sections/about'
import { Skills } from '@/app/sections/skills'
import { Experiences } from '@/app/sections/experiences'
import { Contact } from '@/app/sections/contact'
import { Header } from '@/app/sections/header'
import { Socials } from './components/socials'

export default function App() {
  return (
    <div>
      <Header />
      <div className=" absolute h-full w-full bg-zinc-800 p-10 text-white">
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Contact />
        <Socials />
      </div>
    </div>
  )
}
