import { Separator } from '@/components/ui/separator'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Footer({ LanguageTextData }: any) {
  return (
    <div className="mt-10 static bottom-0 w-full h-20  bg-zinc-800 bg-opacity-60 text-white ">
      <Separator className="w-full" orientation="horizontal" />
      <div className="flex flex-row justify-evenly items-center mt-7">
        <HoverCard>
          <HoverCardTrigger asChild>
            <h4 className="text-white text-sm cursor-default">
              {LanguageTextData.hoverCardText}
            </h4>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-zinc-900 text-white ">
            <div className="flex flex-col ">
              <div className="flex flex-row p-3">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1 p-2">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">React Framework .</p>
                </div>
              </div>
              <div className="flex flex-row p-3">
                <Avatar>
                  <AvatarImage src="https://github.com/tailwindcss.png" />
                  <AvatarFallback>TW</AvatarFallback>
                </Avatar>
                <div className="space-y-1 p-2">
                  <h4 className="text-sm font-semibold">@tailwindcss</h4>
                  <p className="text-sm">CSS Framework.</p>
                </div>
              </div>
              <div className="flex flex-row p-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn-ui.png" />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <div className="space-y-1 p-2">
                  <h4 className="text-sm font-semibold">@shadcn-ui</h4>
                  <p className="text-sm">UI Framework.</p>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <span className="text-sm font-thin  my-auto ">
          {LanguageTextData.yearStateText}
        </span>
        <a
          href="https://www.github.com/rdias66/next-portfolio"
          className="hover:underline hover:underline-offset-2 hover:text-zinc-400  my-auto "
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm font-thin">{LanguageTextData.codeLinkText}</p>
        </a>
      </div>
    </div>
  )
}
