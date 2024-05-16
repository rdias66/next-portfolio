import { Button } from '@/components/ui/button'
import Image from 'next/image'
import DevGif from '@/app/assets/dev-gif.gif'

export function Home({ LanguageTextData }: any) {
  return (
    <section id="Home">
      <div className="container mx-auto px-4 bg-slate-700">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <span className="text-4xl  max-w-full">
              {LanguageTextData.mainText}
            </span>
            <p className="text-xl ">{LanguageTextData.introduction} </p>
            <Button className="">{LanguageTextData.buttonText}</Button>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Image src={DevGif} alt="Dev Gif" />
          </div>
        </div>
      </div>
    </section>
  )
}
