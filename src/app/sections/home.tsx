export function Home({ LanguageTextData }: any) {
  return (
    <section className="pl-4 pr-4 max-w-full" id="Home">
      <div className="m-64 w-1/3 bg-slate-700">
        <h1>{LanguageTextData.mainText}</h1>
        <p>{LanguageTextData.introduction} </p>
      </div>
    </section>
  )
}
