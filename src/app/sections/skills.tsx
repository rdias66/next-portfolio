import techCards from '@/components/techCards'
import Image from 'next/image'

export function Skills({
  LanguageTextData,
  LanguageTitleData,
}: {
  LanguageTextData: any
  LanguageTitleData: string
}) {
  return (
    <section
      id="Skills"
      className="flex flex-col items-center justify-center min-h-screen mt-40"
    >
      <h1 className="text-white text-4xl p-5 font-semibold">
        {LanguageTitleData}
      </h1>

      <div className="w-4/5 rounded-2xl flex flex-wrap justify-center items-center">
        {techCards.map((card, index) => {
          const matchingLanguageText = LanguageTextData.find(
            (data: { title: string }) =>
              data.title === card.name || data.title === 'Inglês',
          )

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-56 h-80 m-5 p-3 ${card.boxStyle}`}
            >
              <Image src={card.icon} alt={card.name} width={40} height={40} />
              <span className="text-white mt-2">
                {LanguageTextData[index].title}
              </span>
              <p className="text-white text-sm pl-3 m-5 italic">
                {matchingLanguageText ? matchingLanguageText.description : ''}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
