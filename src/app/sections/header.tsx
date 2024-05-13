import { Separator } from '@/components/ui/separator'
import { Socials } from '@/components/ui/socials'

export function Header() {
  return (
    <nav
      id="desktop-nav"
      className="sticky flex top--2 w-full justify-around items-center h-20 bg-zinc-800 text-white hover:cursor-default shadow-soft-bottom shadow-zinc-600"
    >
      <div className="text-xl">Rodrigo Dias</div>

      <div>
        <ul className="flex h-5 items-center space-x-4 text-sm">
          <li>
            <a
              href="#Home"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              Home
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              href="#About"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              Sobre
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              href="#Skills"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              Proficiências
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              href="#Experiences"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              Experiências
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              href="#Contact"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              Contato
            </a>
          </li>
          <Separator orientation="vertical" />
          <Socials />
        </ul>
      </div>
    </nav>
  )
}
