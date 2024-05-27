import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <div className="mt-10 static bottom-0 w-full h-20  bg-zinc-800 bg-opacity-60 text-white ">
      <Separator className="w-full" orientation="horizontal" />
      <div className="flex flex-row justify-evenly items-center mt-7">
        <h3 className=" my-auto">Built with</h3>
        <span className="text-sm font-thin  my-auto ">2024</span>
        <a
          href="https://www.github.com/rdias66/next-portfolio"
          className="hover:underline hover:underline-offset-2 hover:text-zinc-400  my-auto "
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm font-thin">Source code</p>
        </a>
      </div>
    </div>
  )
}
