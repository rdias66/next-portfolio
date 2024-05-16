import { Button } from '@/components/ui/button'

export function Home({ LanguageTextData }: any) {
  return (
    <section id="Home" className="flex h-5/6">
      <div className="w-1/2 bg-slate-700 p-10 m-auto flex-row">
        <h1 className="text-4xl">{LanguageTextData.mainText}</h1>
        <p className="text-xl">{LanguageTextData.introduction} </p>

        <Button className="">{LanguageTextData.buttonText}</Button>
      </div>
    </section>
  )
}
