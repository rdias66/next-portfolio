import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Socials } from '@/components/ui/socials'

export function Header({ LanguageTextData, LanguageSwitch }: any) {
  return (
    <nav
      id="desktop-nav"
      className="sticky flex top--2 w-full justify-around items-center h-20 bg-transparent text-white hover:cursor-default shadow-soft-bottom shadow-zinc-600"
    >
      <div className="flex gap-6 items-center">
        <Avatar className="size-14">
          <AvatarImage src="https://avatars.githubusercontent.com/u/88790315?s=400&u=aed260e1a6db4ea2d6136dc7b50e2a49afb6f9d2&v=4" />
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>

        <div className="text-xl">Rodrigo Dias</div>
      </div>

      <div>
        <ul className="flex h-5 items-center space-x-4 text-sm">
          <li>
            <a
              href="#Home"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              {LanguageTextData.home}
            </a>
          </li>
          <Separator orientation="vertical" />

          <li>
            <a
              href="#Skills"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              {LanguageTextData.skills}
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              href="#Experiences"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              {LanguageTextData.experiences}
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              href="#Contact"
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400"
            >
              {LanguageTextData.contact}
            </a>
          </li>
          <Separator orientation="vertical" />
          <Socials />
          {LanguageSwitch}
        </ul>
      </div>
    </nav>
  )
}
