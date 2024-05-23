import iconCards from '@/app/data/iconCards'
import Image from 'next/image'

export function Skills({ LanguageTextData }: any) {
  return (
    <section id="Skills">
      <div className="mt-40  w-4/5 rounded-2xl mx-auto flex flex-wrap">
        {iconCards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-1/6 h-3/6 m-5 p-3 ${card.boxStyle}`}
          >
            <Image src={card.icon} alt={card.name} width={40} height={40} />
            <span className="text-white mt-2">{card.name}</span>
            <p className="text-white text-sm pl-3 m-5 italic">
              {LanguageTextData.techSkillDescription}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
