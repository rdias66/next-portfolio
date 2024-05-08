import { Home } from '@/app/sections/home'
import { About } from '@/app/sections/about'
import { Proficiencies } from '@/app/sections/proficiencies'
import { Skills } from '@/app/sections/skills'
import { Experiences } from '@/app/sections/experiences'
import { Contact } from '@/app/sections/contact'

export default function App() {
  return (
    <div className="absolute flex-1  w-full h-full bg-zinc-700 p-10  text-white">
      <Home />
      <About />
      <Proficiencies />
      <Skills />
      <Experiences />
      <Contact />
    </div>
  )
}
