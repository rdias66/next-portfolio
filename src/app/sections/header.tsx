import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Socials } from '@/components/ui/socials'

export function Header({ LanguageTextData, LanguageSwitch }: any) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      if (section.id == 'Skills' || section.id == 'Experiences')
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      else
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }
  }

  return (
    <nav
      id="desktop-nav"
      className="fixed flex top-0 left-0 z-20  w-full items-center justify-center lg:justify-around xl:justify-around 2xl:justify-around h-20 bg-zinc-800 bg-opacity-60 text-white hover:cursor-default shadow-soft-bottom shadow-zinc-600 "
    >
      <div className="hidden lg:flex xl:flex 2xl:flex gap-6 items-center">
        <Avatar className="size-14">
          <AvatarImage src="https://avatars.githubusercontent.com/u/88790315?s=400&u=aed260e1a6db4ea2d6136dc7b50e2a49afb6f9d2&v=4" />
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>

        <div className="text-xl">Rodrigo Dias</div>
      </div>

      <div>
        <ul className="flex h-5 items-center space-x-1 lg:space-x-4 text-sm md:text-base lg:text-md ">
          <li>
            <a
              onClick={() => scrollToSection('Home')}
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400 hover:cursor-pointer"
            >
              {LanguageTextData.home}
            </a>
          </li>
          <Separator orientation="vertical" />

          <li>
            <a
              onClick={() => scrollToSection('Skills')}
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400 hover:cursor-pointer"
            >
              {LanguageTextData.skills}
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              onClick={() => scrollToSection('Experiences')}
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400 hover:cursor-pointer"
            >
              {LanguageTextData.experiences}
            </a>
          </li>
          <Separator orientation="vertical" />
          <li>
            <a
              onClick={() => scrollToSection('Contact')}
              className="hover:underline hover:underline-offset-2 hover:text-zinc-400 hover:cursor-pointer"
            >
              {LanguageTextData.contact}
            </a>
          </li>
          <Separator orientation="vertical" />
          <div className="hidden lg:block">
            <Socials />
          </div>
          <div className="">{LanguageSwitch}</div>
        </ul>
      </div>
    </nav>
  )
}
